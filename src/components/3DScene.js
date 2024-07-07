// src/components/3DScene.js
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import TWEEN from '@tweenjs/tween.js';

const ThreeDScene = () => {
  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('scene-container').appendChild(renderer.domElement);

    // Lighting setup
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(ambientLight);

    // Model loader
    const loader = new GLTFLoader();
    loader.load('/models/scene.gltf', (gltf) => {
      const model = gltf.scene;
      scene.add(model);
      // Center the model
      model.position.set(-1, -2, 1);
      // Adjust the scale of the model if necessary
      model.scale.set(1, 1, 1);
    }, undefined, (error) => {
      console.error('An error happened', error);
    });

    // Initial camera position
    camera.position.set(0, 1, 6); // Start position

    // Orbit controls for interactivity
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      TWEEN.update();
      controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true
      renderer.render(scene, camera);
    };
    animate();

    // Camera tween animation
    new TWEEN.Tween(camera.position)
      .to({ x: 0, y: -1, z: 0.5 }, 2000) // End position and duration
      .easing(TWEEN.Easing.Quadratic.Out)
      .start();

    // Handle window resizing
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    return () => {
      window.removeEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });
    };
  }, []);

  return <div id="scene-container" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></div>;
};

export default ThreeDScene;
