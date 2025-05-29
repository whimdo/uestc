import * as THREE from three;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.set(0,0,15);
const renderer = new THREE.WebGLRenderer();
renderer.size.set(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const sungeomertry = new THREE.SphereGeomertry(5,32,32);
const sunmaterial = new THREE.MeshBasicalMaterial({color:0xff0000});
const sun = new THREE.mash(sungeomertry,sunmaterial);
scene.add(sun);

const earthgeomertry = new THREE.SphereGeomertry(1,32,32);
const earthmaterial = new THREE.MeshBasicalMaterial({color:0x0000ff});
const earth = new THREE.mash(earthgeomertry,earthmaterial);
scene.add(earth);

