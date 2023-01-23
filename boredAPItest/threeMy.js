import * as THREE from 'three';



// Create the scene
var scene = new THREE.Scene();

// Create a camera and position it
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer and set its size
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// Add the renderer to the webpage
document.body.appendChild(renderer.domElement);

// Create a central point and add it to the scene
var centralPointGeometry = new THREE.SphereGeometry(0.5, 32, 32);
var centralPointMaterial = new THREE.MeshPhongMaterial({color: 0xff0000});
var centralPoint = new THREE.Mesh(centralPointGeometry, centralPointMaterial);
scene.add(centralPoint);

// Create a light source and add it to the scene
var light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1).normalize();
scene.add(light);

// Create a pointer object and add it to the scene
var pointerGeometry = new THREE.ConeGeometry(0.2, 0.5, 32);
var pointerMaterial = new THREE.MeshPhongMaterial({color: 0x0000ff});
var pointer = new THREE.Mesh(pointerGeometry, pointerMaterial);
pointer.position.set(0, 0, -1);
pointer.rotation.set(Math.PI, 0, 0);
scene.add(pointer);

// Create a texture and apply it to the central point
var texture = new THREE.TextureLoader().load("path/to/texture.jpg");
centralPointMaterial.map = texture;
centralPointMaterial.needsUpdate = true;

// Animate the scene
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

document.getElementById('rotateBtn').addEventListener('click', rotatePointer);
function rotatePointer() {
    pointer.rotation.x += 0.1;
}

document.getElementById('lightIntensity').addEventListener('change', setLightIntensity);
function setLightIntensity() {
    var value = document.getElementById('lightIntensity').value;
    light.intensity = value;
}
//Animate the scene
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();


renderer.setSize( window.innerWidth, window.innerHeight );
document.getElementById("room").appendChild( renderer.domElement );