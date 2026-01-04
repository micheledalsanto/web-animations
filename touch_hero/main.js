/**
 * Touch Multimedia - Hand Outline from GLB
 * Loads 3D model and creates particle outline
 */

let scene, camera, renderer;
let particles, particleMaterial;
let handGroup;
let mouse = { x: 0, y: 0, tx: 0, ty: 0 };
let time = 0;
let originalPositions = [];

function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 5);

    renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('canvas'),
        antialias: true,
        alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    loadHandModel();
    setupEvents();
    animate();
}

function loadHandModel() {
    const loader = new THREE.GLTFLoader();

    loader.load(
        './female_hand.glb',
        (gltf) => {
            console.log('Model loaded');
            extractEdgeParticles(gltf.scene);
        },
        (progress) => {
            console.log('Loading:', (progress.loaded / progress.total * 100) + '%');
        },
        (error) => {
            console.error('Error loading model:', error);
        }
    );
}

function extractEdgeParticles(model) {
    const allEdgePoints = [];

    // Traverse all meshes in the model
    model.traverse((child) => {
        if (child.isMesh && child.geometry) {
            const geometry = child.geometry;

            // Get world matrix for proper positioning
            child.updateWorldMatrix(true, false);
            const matrix = child.matrixWorld;

            // Create EdgesGeometry to get only the outline edges
            const edgesGeometry = new THREE.EdgesGeometry(geometry, 15); // 15 degree threshold
            const edgePositions = edgesGeometry.attributes.position.array;

            // Sample points along each edge
            for (let i = 0; i < edgePositions.length; i += 6) {
                const x1 = edgePositions[i];
                const y1 = edgePositions[i + 1];
                const z1 = edgePositions[i + 2];
                const x2 = edgePositions[i + 3];
                const y2 = edgePositions[i + 4];
                const z2 = edgePositions[i + 5];

                // Sample multiple points along each edge
                const samples = 3;
                for (let s = 0; s <= samples; s++) {
                    const t = s / samples;
                    const point = new THREE.Vector3(
                        x1 + (x2 - x1) * t,
                        y1 + (y2 - y1) * t,
                        z1 + (z2 - z1) * t
                    );

                    // Apply world transform
                    point.applyMatrix4(matrix);
                    allEdgePoints.push(point);
                }
            }

            // Also sample some vertices from the mesh surface for density
            const positions = geometry.attributes.position.array;
            for (let i = 0; i < positions.length; i += 9) { // Every 3rd vertex
                const point = new THREE.Vector3(
                    positions[i],
                    positions[i + 1],
                    positions[i + 2]
                );
                point.applyMatrix4(matrix);

                // Add with some randomness to avoid overlap
                if (Math.random() > 0.7) {
                    allEdgePoints.push(point);
                }
            }
        }
    });

    console.log('Total edge points:', allEdgePoints.length);
    createParticles(allEdgePoints);
}

function createParticles(points) {
    // Limit particles for performance
    const maxParticles = Math.min(points.length, 5000);
    const step = Math.max(1, Math.floor(points.length / maxParticles));

    const positions = [];
    originalPositions = [];
    const randoms = [];

    for (let i = 0; i < points.length; i += step) {
        const p = points[i];
        positions.push(p.x, p.y, p.z);
        originalPositions.push(p.x, p.y, p.z);
        randoms.push(Math.random());
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('originalPosition', new THREE.Float32BufferAttribute(originalPositions, 3));
    geometry.setAttribute('aRandom', new THREE.Float32BufferAttribute(randoms, 1));

    particleMaterial = new THREE.ShaderMaterial({
        uniforms: {
            uTime: { value: 0 },
            uMouse: { value: new THREE.Vector3() }
        },
        vertexShader: `
            attribute vec3 originalPosition;
            attribute float aRandom;

            uniform float uTime;
            uniform vec3 uMouse;

            varying float vAlpha;
            varying float vDist;

            void main() {
                vec3 pos = originalPosition;

                // Subtle floating motion
                float wave = sin(uTime * 0.5 + aRandom * 6.28 + originalPosition.y * 2.0) * 0.01;
                pos.x += wave;
                pos.z += wave * 0.5;

                // Mouse interaction
                float mouseDist = distance(pos, uMouse);
                float influence = smoothstep(1.0, 0.0, mouseDist);

                // Repel from mouse
                vec3 dir = pos - uMouse;
                float len = length(dir);
                if (len > 0.001) {
                    dir = normalize(dir);
                }
                pos += dir * influence * 0.15;

                vDist = mouseDist;
                vAlpha = 0.4 + influence * 0.6;

                vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

                float size = 2.0 + influence * 3.0;
                gl_PointSize = size * (100.0 / -mvPosition.z);

                gl_Position = projectionMatrix * mvPosition;
            }
        `,
        fragmentShader: `
            varying float vAlpha;
            varying float vDist;

            void main() {
                float d = length(gl_PointCoord - vec2(0.5));
                if (d > 0.5) discard;

                float alpha = (1.0 - d * 2.0) * vAlpha;

                // White particles
                gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);
            }
        `,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending
    });

    particles = new THREE.Points(geometry, particleMaterial);

    // Create group for rotation
    handGroup = new THREE.Group();
    handGroup.add(particles);

    // Center and scale the hand
    const box = new THREE.Box3().setFromObject(particles);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());

    // Center it
    particles.position.sub(center);

    // Scale to fit nicely
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 2.5 / maxDim;
    handGroup.scale.setScalar(scale);

    // Position to the right
    handGroup.position.x = 1.2;
    handGroup.position.y = -0.2;

    // Rotate to show palm
    handGroup.rotation.x = -0.3;
    handGroup.rotation.y = 0.5;

    scene.add(handGroup);
}

function animate() {
    requestAnimationFrame(animate);

    time += 0.016;

    // Smooth mouse
    mouse.x += (mouse.tx - mouse.x) * 0.05;
    mouse.y += (mouse.ty - mouse.y) * 0.05;

    if (particleMaterial) {
        particleMaterial.uniforms.uTime.value = time;

        // Convert mouse to 3D space
        const mouseVec = new THREE.Vector3(mouse.x * 2, mouse.y * 2, 0);
        particleMaterial.uniforms.uMouse.value.copy(mouseVec);
    }

    // Subtle rotation following mouse
    if (handGroup) {
        handGroup.rotation.y = 0.5 + mouse.x * 0.3;
        handGroup.rotation.x = -0.3 - mouse.y * 0.2;
    }

    renderer.render(scene, camera);
}

function setupEvents() {
    window.addEventListener('mousemove', (e) => {
        mouse.tx = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.ty = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

document.addEventListener('DOMContentLoaded', init);
