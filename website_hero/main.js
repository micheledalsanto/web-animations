/**
 * NEXUS X1 - Futuristic Football Boot Hero
 * Three.js with GLB Model Support
 */

// ============================================
// CONFIGURATION
// ============================================
const CONFIG = {
    model: {
        path: './models/shoe.glb',  // Put your GLB file here
        scale: 2,                    // Adjust based on your model size
        position: { x: 1.5, y: 0, z: 0 }
    },
    colors: {
        phantom: { primary: 0x00f5ff, secondary: 0x0066ff },
        inferno: { primary: 0xff3366, secondary: 0xff6600 },
        volt: { primary: 0xccff00, secondary: 0x66ff00 },
        obsidian: { primary: 0x8b5cf6, secondary: 0x6366f1 }
    },
    camera: {
        fov: 45,
        near: 0.1,
        far: 100,
        position: { x: 0, y: 0, z: 6 }
    }
};

// ============================================
// STATE
// ============================================
const state = {
    mouse: { x: 0, y: 0, targetX: 0, targetY: 0 },
    currentColor: 'phantom',
    isLoaded: false,
    time: 0,
    modelLoaded: false
};

// ============================================
// THREE.JS SETUP
// ============================================
let scene, camera, renderer;
let shoeModel = null;
let energyRing, energyRing2;
let lights = {};

function initThree() {
    // Scene
    scene = new THREE.Scene();

    // Camera
    camera = new THREE.PerspectiveCamera(
        CONFIG.camera.fov,
        window.innerWidth / window.innerHeight,
        CONFIG.camera.near,
        CONFIG.camera.far
    );
    camera.position.set(
        CONFIG.camera.position.x,
        CONFIG.camera.position.y,
        CONFIG.camera.position.z
    );

    // Renderer
    const canvas = document.getElementById('hero-canvas');
    renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;

    // Lights
    setupLights();

    // Load model
    loadShoeModel();

    // Create decorative elements
    createEnergyRings();
    createBackgroundParticles();

    // Start animation
    animate();
}

// ============================================
// LIGHTING
// ============================================
function setupLights() {
    // Ambient light
    lights.ambient = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(lights.ambient);

    // Main key light (cyan tint)
    lights.key = new THREE.DirectionalLight(CONFIG.colors.phantom.primary, 1);
    lights.key.position.set(5, 5, 5);
    scene.add(lights.key);

    // Fill light (blue tint)
    lights.fill = new THREE.DirectionalLight(CONFIG.colors.phantom.secondary, 0.5);
    lights.fill.position.set(-5, 0, 5);
    scene.add(lights.fill);

    // Rim light (white)
    lights.rim = new THREE.DirectionalLight(0xffffff, 0.8);
    lights.rim.position.set(0, 5, -5);
    scene.add(lights.rim);

    // Point light for glow effect
    lights.point = new THREE.PointLight(CONFIG.colors.phantom.primary, 1, 10);
    lights.point.position.set(2, 0, 2);
    scene.add(lights.point);
}

// ============================================
// MODEL LOADING
// ============================================
function loadShoeModel() {
    const loader = new THREE.GLTFLoader();

    loader.load(
        CONFIG.model.path,
        // Success
        (gltf) => {
            shoeModel = gltf.scene;

            // Scale and position
            shoeModel.scale.setScalar(CONFIG.model.scale);
            shoeModel.position.set(
                CONFIG.model.position.x,
                CONFIG.model.position.y,
                CONFIG.model.position.z
            );

            // Center the model
            const box = new THREE.Box3().setFromObject(shoeModel);
            const center = box.getCenter(new THREE.Vector3());
            shoeModel.position.sub(center);
            shoeModel.position.x += CONFIG.model.position.x;

            scene.add(shoeModel);
            state.modelLoaded = true;

            console.log('Model loaded successfully!');
        },
        // Progress
        (xhr) => {
            const progress = (xhr.loaded / xhr.total) * 100;
            const progressBar = document.querySelector('.loader-progress');
            if (progressBar) {
                progressBar.style.width = progress + '%';
            }
        },
        // Error - fallback to particles
        (error) => {
            console.warn('Could not load model, using particle fallback:', error);
            createParticleFallback();
        }
    );
}

// ============================================
// PARTICLE FALLBACK (if no model)
// ============================================
function createParticleFallback() {
    const count = 3000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const section = Math.random();

        let x, y, z;

        if (section < 0.5) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const r = 1 + Math.random() * 0.3;
            x = r * Math.sin(phi) * Math.cos(theta) * 1.5;
            y = r * Math.sin(phi) * Math.sin(theta) * 0.5;
            z = r * Math.cos(phi) * 0.7;
        } else if (section < 0.8) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const r = 0.6 + Math.random() * 0.2;
            x = r * Math.sin(phi) * Math.cos(theta) * 0.6 + 1.8;
            y = r * Math.sin(phi) * Math.sin(theta) * 0.4 - 0.3;
            z = r * Math.cos(phi) * 0.5;
        } else {
            x = (Math.random() - 0.5) * 3.5;
            y = -0.7 - Math.random() * 0.2;
            z = (Math.random() - 0.5) * 1;
        }

        positions[i3] = x;
        positions[i3 + 1] = y;
        positions[i3 + 2] = z;

        const color = new THREE.Color(CONFIG.colors.phantom.primary);
        colors[i3] = color.r;
        colors[i3 + 1] = color.g;
        colors[i3 + 2] = color.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
        size: 0.03,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });

    shoeModel = new THREE.Points(geometry, material);
    shoeModel.position.x = 1.5;
    scene.add(shoeModel);
    state.modelLoaded = true;
}

// ============================================
// ENERGY RINGS
// ============================================
function createEnergyRings() {
    const ringGeometry = new THREE.TorusGeometry(2, 0.01, 16, 64);
    const ringMaterial = new THREE.MeshBasicMaterial({
        color: CONFIG.colors.phantom.primary,
        transparent: true,
        opacity: 0.5
    });
    energyRing = new THREE.Mesh(ringGeometry, ringMaterial);
    energyRing.position.x = 1.5;
    energyRing.rotation.x = Math.PI / 2;
    scene.add(energyRing);

    const ring2Geometry = new THREE.TorusGeometry(2.5, 0.008, 16, 64);
    const ring2Material = new THREE.MeshBasicMaterial({
        color: CONFIG.colors.phantom.secondary,
        transparent: true,
        opacity: 0.3
    });
    energyRing2 = new THREE.Mesh(ring2Geometry, ring2Material);
    energyRing2.position.x = 1.5;
    energyRing2.rotation.x = Math.PI / 3;
    scene.add(energyRing2);
}

// ============================================
// BACKGROUND PARTICLES
// ============================================
function createBackgroundParticles() {
    const geometry = new THREE.BufferGeometry();
    const count = 300;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 15;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
        size: 0.02,
        color: CONFIG.colors.phantom.primary,
        transparent: true,
        opacity: 0.4
    });

    scene.add(new THREE.Points(geometry, material));
}

// ============================================
// ANIMATION LOOP
// ============================================
function animate() {
    requestAnimationFrame(animate);

    state.time += 0.016;

    // Smooth mouse following
    state.mouse.x += (state.mouse.targetX - state.mouse.x) * 0.05;
    state.mouse.y += (state.mouse.targetY - state.mouse.y) * 0.05;

    // Animate shoe model
    if (shoeModel) {
        shoeModel.rotation.y += 0.003;
        shoeModel.position.y = Math.sin(state.time * 0.8) * 0.15;
        shoeModel.rotation.x = state.mouse.y * 0.1;
        shoeModel.rotation.z = -state.mouse.x * 0.05;
    }

    // Animate rings
    if (energyRing) {
        energyRing.rotation.z += 0.002;
    }
    if (energyRing2) {
        energyRing2.rotation.z -= 0.0015;
    }

    renderer.render(scene, camera);
}

// ============================================
// COLOR CHANGE
// ============================================
function changeColor(colorName) {
    if (!CONFIG.colors[colorName]) return;

    const colors = CONFIG.colors[colorName];
    state.currentColor = colorName;

    // Update CSS
    document.documentElement.style.setProperty(
        '--color-primary',
        `#${colors.primary.toString(16).padStart(6, '0')}`
    );

    // Update lights
    lights.key.color.setHex(colors.primary);
    lights.fill.color.setHex(colors.secondary);
    lights.point.color.setHex(colors.primary);

    // Update rings
    if (energyRing) energyRing.material.color.setHex(colors.primary);
    if (energyRing2) energyRing2.material.color.setHex(colors.secondary);
}

// ============================================
// EVENT LISTENERS
// ============================================
function initEventListeners() {
    // Mouse move
    document.addEventListener('mousemove', (e) => {
        state.mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
        state.mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;

        const cursor = document.querySelector('.cursor-glow');
        if (cursor) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        }
    });

    // Resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Color selector
    document.querySelectorAll('.color-option').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.color-option').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            changeColor(btn.dataset.color);
        });
    });
}

// ============================================
// LOADER
// ============================================
function initLoader() {
    const loader = document.querySelector('.loader');
    const progress = document.querySelector('.loader-progress');

    // Wait for model or timeout
    const checkLoaded = setInterval(() => {
        if (state.modelLoaded) {
            clearInterval(checkLoaded);
            progress.style.width = '100%';

            setTimeout(() => {
                loader.classList.add('hidden');
                showUI();
            }, 300);
        }
    }, 100);

    // Timeout fallback
    setTimeout(() => {
        if (!state.modelLoaded) {
            clearInterval(checkLoaded);
            createParticleFallback();
        }
    }, 5000);
}

function showUI() {
    document.querySelector('.nav')?.classList.add('visible');
    document.querySelector('.hero-content')?.classList.add('visible');
    document.querySelector('.hero-product')?.classList.add('visible');
    document.querySelector('.scroll-indicator')?.classList.add('visible');
    document.querySelector('.social-proof')?.classList.add('visible');
    document.querySelector('.color-selector')?.classList.add('visible');

    // Intro animation
    if (shoeModel) {
        shoeModel.scale.setScalar(0.01);
        gsap.to(shoeModel.scale, {
            x: CONFIG.model.scale,
            y: CONFIG.model.scale,
            z: CONFIG.model.scale,
            duration: 1,
            ease: 'power2.out'
        });
    }
}

// ============================================
// INITIALIZE
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initThree();
    initEventListeners();
    initLoader();
});
