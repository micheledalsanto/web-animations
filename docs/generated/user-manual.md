# Web Animations Collection
## Technical Documentation

**Version:** 1.0.0
**Generated:** December 17, 2025
**License:** MIT License - Free to use and modify

---

## Table of Contents

1. [Overview](#overview)
2. [Quick Start](#quick-start)
3. [Animations](#animations)
   - [Password Reveal Animation](#1-password-reveal-animation)
   - [Cart Animation with Multi-Currency](#2-cart-animation-with-multi-currency)
   - [CandleShop E-commerce Opening](#3-candleshop-e-commerce-opening)
   - [Touch Multimedia 3D Hand Hero](#4-touch-multimedia-3d-hand-hero)
   - [NEXUS X1 Futuristic Product Hero](#5-nexus-x1-futuristic-product-hero)
4. [Browser Compatibility](#browser-compatibility)
5. [Performance Considerations](#performance-considerations)
6. [Integration Guide](#integration-guide)
7. [Customization](#customization)
8. [License](#license)

---

## Overview

This collection showcases **5 modern web animations** ranging from simple CSS/JS interactions to advanced WebGL 3D experiences. Each animation is production-ready, fully documented, and designed to be easily integrated into your projects.

### Project Statistics

- **Total Animations:** 5
- **Total Lines of Code:** 3,754
- **Technologies:** HTML5, CSS3, JavaScript ES6+, SVG, Three.js, WebGL, GLSL
- **Total Size:** ~1.5 MB (including assets)
- **Dependencies:** Zero for simple animations, Three.js + GSAP for advanced 3D

### Technology Breakdown

| Technology | Animations | Description |
|------------|------------|-------------|
| **HTML5 + CSS3 + JS** | 5 | All animations use modern web standards |
| **SVG** | 1 | CandleShop uses SVG for scalable graphics |
| **Three.js + WebGL** | 2 | Touch Hero and Website Hero use 3D rendering |
| **GLSL Shaders** | 2 | Custom shaders for particle effects |
| **GLB Models** | 2 | 3D models for product visualization |

---

## Quick Start

### Installation

No build process required! Each animation is standalone:

```bash
# Clone the repository
git clone https://github.com/yourusername/web-animations.git

# Navigate to any animation
cd web-animations/password-reveal

# Open in browser
open index.html
```

### Usage

1. **Browse the collection** - Each folder contains a complete animation
2. **Open index.html** in a modern browser to see it in action
3. **Customize** - Edit HTML/CSS/JS files to match your needs
4. **Integrate** - Copy files into your project and adapt

---

## Animations

### 1. Password Reveal Animation

**Complexity:** Simple | **Lines:** 321 | **File Size:** 9 KB

![Password Reveal](https://via.placeholder.com/800x400?text=Password+Reveal+Animation)

#### Description

A character-by-character password reveal animation with smooth ease-in timing. When users click the eye icon, password characters are revealed one by one from left to right, starting slow and accelerating to create a natural, engaging effect.

#### Key Features

- Zero dependencies - pure vanilla JavaScript
- Cubic ease-in timing curve (starts at 120ms, accelerates to 30ms)
- Glassmorphism UI with backdrop blur
- Keyboard shortcut (Ctrl/Cmd + Shift + P)
- ARIA labels for screen readers
- Responsive gradient background

#### Visual Effects

- Characters revealed left-to-right with bullet points (●) transitioning to actual text
- Subtle pulse effect during reveal (translateX + opacity fade)
- Eye icon slash line animation when visible
- Smooth transitions on hover and focus states

#### Technologies

- HTML5
- CSS3 (Backdrop filter, CSS animations)
- Vanilla JavaScript (ES6+ with async/await)

#### Use Cases

- Login forms
- Authentication interfaces
- Password management systems
- Account settings pages
- Admin panels

#### Integration Example

```html
<div class="password-wrapper">
  <input type="text" id="password" value="yourpassword" readonly>
  <button type="button" class="toggle-password" aria-label="Show password">
    <svg class="eye-icon">...</svg>
  </button>
</div>

<script>
const passwordInput = document.getElementById('password');
const toggleButton = document.querySelector('.toggle-password');
new PasswordReveal(passwordInput, toggleButton);
</script>
```

#### Customization Parameters

| Parameter | Location | Default | Description |
|-----------|----------|---------|-------------|
| Reveal Speed | script.js:9-10 | 30ms (base), 120ms (initial) | Character reveal timing |
| Timing Curve | script.js:73 | Cubic (power 3) | Animation acceleration curve |
| Primary Color | style.css:8 | #ff6b6b (coral) | Main brand color |
| Background | style.css:18 | Coral to peach gradient | Page background colors |

#### Performance

- Load time: < 50ms
- Animation FPS: 60 FPS
- Memory: < 1 MB
- No external dependencies

---

### 2. Cart Animation with Multi-Currency

**Complexity:** Intermediate | **Lines:** 466 | **File Size:** 13 KB

![Cart Animation](https://via.placeholder.com/800x400?text=Cart+Animation)

#### Description

A modern add-to-cart animation with real-time multi-currency conversion. Features elastic bounce effects, success state feedback, and support for 4 currencies (EUR, USD, GBP, JPY) with proper formatting.

#### Key Features

- Real-time currency conversion with 4 currencies
- Elastic bounce animation on cart icon (cubic-bezier with overshoot)
- Badge counter with scale animation
- Button state transformation (blue → green with checkmark)
- Dark theme with glassmorphism
- Currency-specific formatting (JPY without decimals)

#### Visual Effects

- Cart icon bounces with rotation when item added
- Counter badge appears with elastic scale (cubic-bezier(0.68, -0.55, 0.265, 1.55))
- Price updates with scale to 1.2x and color flash to green
- Button changes: plus icon → checkmark, "Add to Cart" → "Added!"
- Product card hover lift effect
- Plus icon rotates 90° on hover

#### Technologies

- HTML5
- CSS3 (CSS Variables, Animations)
- Vanilla JavaScript (ES6+ Classes)

#### Currency Support

| Currency | Symbol | Rate | Format Example |
|----------|--------|------|----------------|
| EUR | € | 1.0 (base) | €149.99 |
| USD | $ | 1.09 | $163.49 |
| GBP | £ | 0.86 | £128.99 |
| JPY | ¥ | 161.50 | ¥24,225 (no decimals) |

#### Use Cases

- E-commerce product pages
- Online stores with international customers
- Shopping cart systems
- SaaS product purchase pages
- Digital marketplaces

#### Integration Example

```html
<div class="product-card">
  <div class="product-info">
    <span class="product-price">€149.99</span>
    <button class="add-to-cart-btn"
            data-price="149.99"
            data-name="Product Name">
      Add to Cart
    </button>
  </div>
</div>

<script>
new ShoppingCart();
</script>
```

#### Customization Parameters

| Parameter | Location | Default | Description |
|-----------|----------|---------|-------------|
| Base Price | script.js:8 | €149.99 | Product price in EUR |
| Exchange Rates | index.html:15-18 | USD:1.09, GBP:0.86, JPY:161.50 | Currency conversion rates |
| Button Reset Time | script.js:74 | 2000ms | How long success state lasts |
| Primary Color | style.css:8 | #3b82f6 (blue) | Main accent color |
| Success Color | style.css:15 | #10b981 (green) | Success state color |

#### Performance

- Load time: < 100ms (excluding 623 KB product image)
- Animation FPS: 60 FPS
- Memory: < 2 MB
- Recommendation: Optimize product image to WebP format

---

### 3. CandleShop E-commerce Opening

**Complexity:** Intermediate-Advanced | **Lines:** 783 | **File Size:** 20 KB

![CandleShop](https://via.placeholder.com/800x400?text=CandleShop+Animation)

#### Description

An elegant e-commerce opening animation featuring an interactive SVG candle. When clicked, the candle lights up with a realistic flame, then the light "spreads" radially from the center, revealing the full website with a dramatic effect.

#### Key Features

- Interactive SVG candle with radial gradient flame
- Flame ignition with spring-like animation (overshoot to 1.3x scale)
- Continuous flame flicker and glow pulse
- Radial overlay reveal (0% to 100% transparent circle expansion)
- Intersection Observer for scroll-triggered product animations
- Keyboard accessibility (Enter/Space to light)
- Performance optimizations (hardware detection, reduced motion)

#### Visual Effects

- SVG flame appears with scale 0.3→1.3→1.0 motion
- Continuous flicker: rotation (-2° to 1°) + scale (0.95 to 1.1)
- Radial glow pulses: opacity (0.3 to 0.6) + scale (1.0 to 1.2)
- Radial overlay expands from 5% to 100% transparency
- Candle fades out with scale increase (1.0 → 1.1)
- Product cards stagger-in on scroll (0.1s delay each)

#### Technologies

- HTML5 (Semantic structure)
- CSS3 (Complex animations, gradients)
- Vanilla JavaScript (ES6+)
- SVG (Candle with radial gradients)
- Intersection Observer API

#### Animation Timeline

| Time | Event |
|------|-------|
| 0ms | User clicks candle |
| 0-800ms | Flame ignites with spring motion |
| 800ms+ | Flame flickers continuously |
| 800ms | Radial reveal begins (2s duration) |
| 2800ms | Loading screen fades out |
| 3000ms+ | Product cards animate in on scroll |

#### Use Cases

- E-commerce website intros
- Artisanal product brand storytelling
- Luxury retail online experiences
- Creative agency portfolios
- Product launch landing pages

#### Integration Example

```html
<div class="loading-screen">
  <div class="candle-container" tabindex="0" role="button">
    <svg class="candle" viewBox="0 0 100 200">
      <ellipse class="flame" cx="50" cy="65" rx="8" ry="15" fill="url(#flameGradient)"/>
      <!-- SVG paths... -->
    </svg>
  </div>
</div>

<div class="radial-overlay"></div>

<div class="main-content">
  <!-- Your website content -->
</div>
```

#### Customization Parameters

| Parameter | Location | Default | Description |
|-----------|----------|---------|-------------|
| Flame Colors | index.html:29-32 | Yellow→Orange→Red | Gradient stops |
| Ignition Duration | styles.css:105 + script.js:44 | 0.8s | Time for flame to appear |
| Radial Reveal Speed | styles.css:165 | 1.0s | Light spread duration |
| Candle Fade Duration | styles.css:443 | 2.0s | Disappearance time |
| Brand Color | styles.css:222 | #8B4513 (brown) | Logo, buttons, prices |
| Product Card Stagger | script.js:111 | 0.1s | Delay between cards |

#### Performance

- Total size: ~20 KB (excluding images)
- Animation FPS: 60 FPS on modern devices
- Load time: < 100ms
- Reduced motion support included
- Hardware detection for low-end devices

---

### 4. Touch Multimedia 3D Hand Hero

**Complexity:** Advanced | **Lines:** 668 | **File Size:** 17 KB + 399 KB model

![Touch Hero](https://via.placeholder.com/800x400?text=Touch+Hero)

#### Description

An immersive hero section featuring a 3D hand model rendered as ~5000 animated particles. Uses Three.js to extract edge geometry from a GLB model and create an interactive particle outline that responds to mouse movement with repulsion effects.

#### Key Features

- GLB model loaded and converted to particle outline
- Custom GLSL shaders for particle behavior
- Mouse interaction: particles repel from cursor
- Hand rotates following mouse (subtle parallax)
- Aurora borealis CSS background (3 colored layers)
- EdgesGeometry extraction (15° angle threshold)
- Performance optimization (5000 particle limit)
- Additive blending for glowing effect

#### Visual Effects

- 5000 white particles forming hand outline
- Particles float with sine wave animation
- Mouse repulsion with smooth influence radius (1.0 units)
- Particle size increases near cursor (2.0 → 5.0)
- Hand rotates: yaw (0.5 + mouse.x * 0.3), pitch (-0.3 - mouse.y * 0.2)
- Aurora drift animations: 3 gradients moving in 20-25s cycles
- Radial particle gradient (fades from center)

#### Technologies

- Three.js r149+
- WebGL (GLSL Shaders)
- GLTF/GLB 3D Models
- CSS3 (Aurora blur filters)
- Vanilla JavaScript

#### Shader Implementation

**Vertex Shader:**
- Floating motion: `sin(uTime * 0.5 + aRandom * 6.28 + posY * 2.0) * 0.01`
- Mouse repulsion: `pos += direction * influence * 0.15`
- Particle size: `2.0 + influence * 3.0` (base to max)
- Perspective size: `size * (100.0 / -mvPosition.z)`

**Fragment Shader:**
- Circular particles: `length(gl_PointCoord - 0.5) > 0.5` discarded
- Radial gradient: `(1.0 - d * 2.0) * vAlpha`
- Color: Pure white `vec4(1.0, 1.0, 1.0, alpha)`
- Alpha: 0.4 base, 1.0 near mouse

#### Aurora Effect

| Layer | Color | Position | Animation Duration |
|-------|-------|----------|-------------------|
| Aurora 1 | Blue (rgba(100,180,255,0.4)) | 30% 30% | 20s |
| Aurora 2 | Purple (rgba(160,100,255,0.3)) | 70% 50% | 25s |
| Aurora 3 | Green (rgba(100,255,180,0.25)) | 50% 70% | 22s |

All layers have 100px blur and drift with scale + translate animations.

#### Use Cases

- Tech agency hero sections
- Software company landing pages
- Creative studio portfolios
- Modern corporate websites
- App development company sites

#### Integration Example

```html
<div class="aurora">
  <div class="aurora-1"></div>
  <div class="aurora-2"></div>
  <div class="aurora-3"></div>
</div>

<canvas id="canvas"></canvas>

<main class="hero">
  <div class="hero-content">
    <h1>Your Company Title</h1>
    <!-- Content -->
  </div>
</main>

<script src="https://cdn.jsdelivr.net/npm/three@0.149.0/build/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/three@0.149.0/examples/js/loaders/GLTFLoader.js"></script>
<script src="main.js"></script>
```

#### Customization Parameters

| Parameter | Location | Default | Description |
|-----------|----------|---------|-------------|
| Particle Count | main.js:115 | 5000 | Max particles for performance |
| Repulsion Strength | main.js:167 | 0.15 | Mouse push distance |
| Particle Size | main.js:174 | 2.0 base, 5.0 max | Size range |
| Floating Speed | main.js:153 | 0.5 multiplier | Wave animation speed |
| Hand Position | main.js:219-220 | x:1.2, y:-0.2 | Screen placement |
| Hand Rotation | main.js:223-224 | x:-0.3, y:0.5 | Initial orientation |
| Aurora Colors | styles.css:45,50,55 | Blue/Purple/Green | Background gradient colors |
| Particle Color | main.js:191 | White (1.0, 1.0, 1.0) | Can change to any RGB |

#### Performance

- Model size: 399 KB (female_hand.glb)
- Particles: ~4000-5000 points
- FPS: 60 FPS on modern GPUs, 30-45 on integrated
- Load time: < 2s on fast connection
- Memory: ~50-100 MB (Three.js + buffers)

#### Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14.1+
- Edge 90+
- Requires WebGL 1.0

---

### 5. NEXUS X1 Futuristic Product Hero

**Complexity:** Advanced | **Lines:** 1516 | **File Size:** 38 KB + models

![NEXUS X1](https://via.placeholder.com/800x400?text=NEXUS+X1)

#### Description

A premium, futuristic product showcase featuring a 3D model with cinematic ACES Filmic tone mapping, dynamic lighting, energy rings, custom cursor, loading screen, and real-time color customization. Powered by Three.js and GSAP for professional-grade animations.

#### Key Features

- ACES Filmic tone mapping for film-quality rendering
- Dynamic 4-color system (Phantom, Inferno, Volt, Obsidian)
- GLTFLoader with progress bar and fallback
- Multi-light setup (ambient, key, fill, rim, point)
- Two rotating energy rings
- 300 background particles
- Custom glowing cursor
- GSAP-powered intro animation (scale 0.01 → 2.0)
- Config-driven architecture
- Responsive design

#### Visual Effects

- 3D product auto-rotates (0.003 rad/frame)
- Floating animation: `sin(time * 0.8) * 0.15` vertical oscillation
- Mouse parallax: product rotates following cursor
- Energy rings rotate in opposite directions (±0.002 rad/frame)
- Lights change color dynamically with product
- Custom cursor with radial gradient glow (100px blur)
- GSAP intro with power2.out easing (1s duration)
- Loading screen with animated progress bar

#### Technologies

- Three.js r149+
- WebGL
- GLTF/GLB 3D Models
- GSAP 3.x
- CSS3 (Glassmorphism, gradients)
- Google Fonts (Orbitron, Inter)

#### Color System

All colors update synchronously across lights, rings, particles, and UI:

| Colorway | Primary | Secondary | Description |
|----------|---------|-----------|-------------|
| **Phantom** | #00f5ff (Cyan) | #0066ff (Blue) | Tech, futuristic |
| **Inferno** | #ff3366 (Pink) | #ff6600 (Orange) | Energy, passion |
| **Volt** | #ccff00 (Lime) | #66ff00 (Green) | Electric, sport |
| **Obsidian** | #8b5cf6 (Purple) | #6366f1 (Indigo) | Luxury, premium |

#### Lighting Setup

| Light | Type | Position | Intensity | Purpose |
|-------|------|----------|-----------|---------|
| Ambient | Ambient | - | 0.4 | Base illumination |
| Key | Directional | (5,5,5) | 1.0 | Main light (color tinted) |
| Fill | Directional | (-5,0,5) | 0.5 | Shadow softening |
| Rim | Directional | (0,5,-5) | 0.8 | Edge highlighting |
| Point | Point | (2,0,2) | 1.0 | Product glow (range:10) |

#### Particle Fallback

If model fails to load within 5 seconds, system creates 3000 particles arranged in shoe-like shape:
- 50% main body: spherical distribution
- 30% toe area: smaller sphere
- 20% sole: flat plane

#### Use Cases

- Premium product launch pages
- E-commerce 3D product views
- Sports brand websites (footwear, equipment)
- Luxury fashion showcases
- Tech product reveals
- Automotive websites
- Gaming peripheral sites

#### Integration Example

```html
<!-- Loading Screen -->
<div class="loader">
  <div class="loader-content">
    <div class="loader-logo">NEXUS</div>
    <div class="loader-bar">
      <div class="loader-progress"></div>
    </div>
  </div>
</div>

<!-- Three.js Canvas -->
<canvas id="hero-canvas"></canvas>

<!-- Navigation -->
<nav class="nav">
  <div class="nav-logo">YOUR BRAND</div>
  <!-- Nav links -->
</nav>

<!-- Hero Content -->
<main class="hero">
  <div class="hero-content">
    <h1>Product Title</h1>
    <p>Description</p>
  </div>
</main>

<!-- Color Selector -->
<div class="color-selector">
  <button class="color-option active" data-color="phantom"></button>
  <button class="color-option" data-color="inferno"></button>
  <button class="color-option" data-color="volt"></button>
  <button class="color-option" data-color="obsidian"></button>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r149/three.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="main.js"></script>
```

#### Customization Parameters

| Parameter | Location | Default | Description |
|-----------|----------|---------|-------------|
| Model Path | main.js:11 | './models/shoe.glb' | Your 3D model file |
| Model Scale | main.js:12 | 2.0 | Size multiplier |
| Model Position | main.js:13 | x:1.5, y:0, z:0 | Screen placement |
| Color Schemes | main.js:16-19 | 4 presets | Primary + secondary colors |
| Camera FOV | main.js:22 | 45° | Field of view |
| Auto-Rotation Speed | main.js:297 | 0.003 rad/frame | Rotation speed |
| Floating Amplitude | main.js:298 | 0.15 units | Vertical movement |
| Mouse Parallax | main.js:299-300 | x:0.1, z:0.05 | Mouse sensitivity |
| Tone Mapping Exposure | main.js:76 | 1.0 | Overall brightness |

#### Adding Custom Colors

```javascript
// 1. Add to CONFIG.colors in main.js
colors: {
  sunset: { primary: 0xff6b35, secondary: 0xf7931e }
}

// 2. Add HTML button
<button class="color-option" data-color="sunset"
        style="background: linear-gradient(135deg, #ff6b35, #f7931e)">
</button>
```

#### Performance

- Code size: ~38 KB (HTML + CSS + JS)
- Dependencies: Three.js (~600 KB), GSAP (~50 KB) from CDN
- Model size: User-provided (recommend < 5 MB)
- Particles: 300 background + 3000 fallback
- FPS: 60 FPS on modern GPUs, 30-45 on integrated
- Load time: Model-dependent (5s timeout)
- Memory: ~100-200 MB

#### Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14.1+
- Edge 90+
- Requires WebGL 1.0

---

## Browser Compatibility

### Basic Animations (1-3)

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 60+ | Full support |
| Firefox | 55+ | Full support |
| Safari | 12+ | Full support (webkit prefix for backdrop-filter) |
| Edge | 79+ | Full support |
| IE11 | - | Not supported (use polyfills) |

**Features required:**
- CSS Variables
- CSS Backdrop Filter (glassmorphism)
- SVG Animations (CandleShop)
- Intersection Observer (CandleShop)
- ES6+ JavaScript

### Advanced 3D Animations (4-5)

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 90+ | Full support |
| Firefox | 88+ | Full support |
| Safari | 14.1+ | Full support |
| Edge | 90+ | Full support |
| IE11 | - | Not supported |

**Features required:**
- WebGL 1.0
- GLSL Shaders
- GLTF 2.0 Support (via Three.js)
- ES6+ Modules
- GPU with decent performance

### Feature Detection

Add this to check WebGL support:

```javascript
function checkWebGLSupport() {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch (e) {
    return false;
  }
}

if (!checkWebGLSupport()) {
  console.warn('WebGL not supported, showing fallback content');
  // Show static images or simplified version
}
```

---

## Performance Considerations

### Simple Animations (1-3)

**Optimizations:**
- Zero or minimal dependencies
- GPU-accelerated CSS (transform, opacity)
- Efficient DOM manipulation
- Event delegation where applicable
- Cached DOM queries

**Metrics:**
- Load time: < 100ms
- Animation FPS: 60 FPS consistently
- Memory: < 5 MB
- Mobile-friendly

### Advanced 3D Animations (4-5)

**Optimizations:**
- Particle count limits (5000 for touch_hero, 300 background for website_hero)
- Pixel ratio capped at 2x (no 4K supersampling)
- Model loading with progress and fallbacks
- Timeout fallbacks (5 seconds)
- Mouse smoothing (reduces shader updates)
- Efficient animation loops
- GPU-accelerated animations (GSAP)

**Metrics:**
- Load time: 1-3 seconds (model-dependent)
- Animation FPS: 60 FPS on desktop, 30-45 on mobile
- Memory: 50-200 MB
- GPU usage: Moderate to high

### Best Practices

1. **Lazy Load 3D Animations:** Only initialize when in viewport
2. **Optimize 3D Models:** Keep GLB files under 5 MB
3. **Use WebP Images:** Convert product images to WebP format
4. **Reduce Particles:** On mobile, halve particle counts
5. **Add Loading States:** Always show progress for 3D content
6. **Fallback Content:** Provide static images if WebGL fails
7. **Test on Low-End Devices:** Ensure 30+ FPS on integrated GPUs
8. **Monitor Memory:** Use Chrome DevTools to check for leaks

### Mobile Optimization

```javascript
// Detect mobile and reduce quality
const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

if (isMobile) {
  CONFIG.particles = Math.floor(CONFIG.particles / 2); // Half particles
  renderer.setPixelRatio(1); // Force 1x pixel ratio
  // Disable expensive effects
}
```

---

## Integration Guide

### Basic Integration (Animations 1-3)

1. **Copy Files:** Copy HTML, CSS, JS files to your project
2. **Link Assets:** Update paths to styles.css and scripts
3. **Customize:** Edit colors, timing, and content
4. **Test:** Open in browser and verify functionality

Example for Password Reveal:

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="path/to/password-reveal/style.css">
</head>
<body>
  <!-- Copy HTML structure -->
  <div class="password-wrapper">
    <input type="text" id="password" value="yourpassword" readonly>
    <button type="button" class="toggle-password">
      <!-- SVG icon -->
    </button>
  </div>

  <script src="path/to/password-reveal/script.js"></script>
</body>
</html>
```

### Advanced Integration (Animations 4-5)

1. **Include Dependencies:**
   ```html
   <script src="https://cdn.jsdelivr.net/npm/three@0.149.0/build/three.min.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
   ```

2. **Copy Assets:** Include 3D models (GLB files), textures, etc.

3. **Configure Paths:** Update CONFIG object in main.js
   ```javascript
   const CONFIG = {
     model: {
       path: '/path/to/your-model.glb',
       scale: 2,
       position: { x: 1.5, y: 0, z: 0 }
     }
   };
   ```

4. **Customize Colors:** Edit color schemes as needed

5. **Test Performance:** Check FPS on target devices

### React Integration Example

```jsx
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function ThreeDHero() {
  const canvasRef = useRef();

  useEffect(() => {
    // Initialize Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });

    // Load model and setup animation...
    // (Copy logic from main.js)

    return () => {
      // Cleanup
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} id="hero-canvas"></canvas>;
}
```

### Vue Integration Example

```vue
<template>
  <canvas ref="canvas" id="hero-canvas"></canvas>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default {
  mounted() {
    this.initThree();
  },
  methods: {
    initThree() {
      const scene = new THREE.Scene();
      // ... Three.js setup (copy from main.js)
    }
  },
  beforeUnmount() {
    // Cleanup Three.js resources
  }
}
</script>
```

---

## Customization

### Color Schemes

All animations support easy color customization via CSS variables:

```css
:root {
  --primary-color: #your-brand-color;
  --secondary-color: #your-accent-color;
  --text-color: #your-text-color;
}
```

### Animation Timing

Adjust speeds by modifying keyframe durations or JavaScript timing:

```css
/* CSS Example */
@keyframes bounce {
  /* Change from 0.6s to 1s for slower */
}
animation: bounce 1s ease;
```

```javascript
// JavaScript Example
// Change from 0.003 to 0.006 for faster rotation
shoeModel.rotation.y += 0.006;
```

### Responsive Breakpoints

Default breakpoints can be adjusted:

```css
/* Tablet */
@media (max-width: 1024px) { /* ... */ }

/* Mobile */
@media (max-width: 768px) { /* ... */ }

/* Small Mobile */
@media (max-width: 480px) { /* ... */ }
```

### Accessibility

Add these features to improve accessibility:

1. **Keyboard Navigation:**
   ```javascript
   element.setAttribute('tabindex', '0');
   element.addEventListener('keydown', (e) => {
     if (e.key === 'Enter' || e.key === ' ') {
       // Trigger action
     }
   });
   ```

2. **Screen Reader Support:**
   ```html
   <button aria-label="Show password" role="button">
     <!-- Icon -->
   </button>
   ```

3. **Reduced Motion:**
   ```css
   @media (prefers-reduced-motion: reduce) {
     * {
       animation-duration: 0.01s !important;
       transition-duration: 0.01s !important;
     }
   }
   ```

---

## License

MIT License

Copyright (c) 2025 Web Animations Collection

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

## Credits

- **Password Reveal:** Pure CSS/JS implementation
- **Cart Animation:** Dark theme design with glassmorphism
- **CandleShop:** SVG graphics and radial reveal technique
- **Touch Hero:** Three.js particle system with GLSL shaders
- **Website Hero:** ACES tone mapping and GSAP animations

## Support

For questions, issues, or contributions:
- GitHub: [github.com/yourusername/web-animations](https://github.com/yourusername/web-animations)
- Email: your.email@example.com

---

*Generated with AI-Powered Documentation Pipeline v1.0*
*Documentation Date: December 17, 2025*
