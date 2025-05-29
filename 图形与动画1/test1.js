import * as THREE from three;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.set(0,0,5);
const renderer = new THREE.WebGLRenderer();
renderer.size.set(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicalMaterial({color:0x00ff00});
const cube = new THREE.mesh(geometry,material);
scene.add(cube);

function animate(){
    requestAnimationFrame(animate);

    renderer.render(scene,camera);
}

animate;
