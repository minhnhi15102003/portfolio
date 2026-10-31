import * as THREE from "three";
import { RGBELoader } from "three-stdlib";
import { gsap } from "gsap";

const setLighting = (scene: THREE.Scene) => {
  // Main front key light to illuminate character face and body vividly
  const frontKeyLight = new THREE.DirectionalLight(0xfff8f0, 2.2);
  frontKeyLight.position.set(0, 14, 20);
  frontKeyLight.castShadow = true;
  scene.add(frontKeyLight);

  // Soft fill light from the left side
  const fillLight = new THREE.DirectionalLight(0xddd0ff, 1.4);
  fillLight.position.set(-6, 12, 10);
  scene.add(fillLight);

  // Rim back light for sleek edge highlights
  const directionalLight = new THREE.DirectionalLight(0xc7a9ff, 1.8);
  directionalLight.position.set(4, 15, -6);
  scene.add(directionalLight);

  const pointLight = new THREE.PointLight(0xc2a4ff, 0, 100, 3);
  pointLight.position.set(3, 12, 4);
  scene.add(pointLight);

  // Ambient fill light so shadows are never pitch black
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
  scene.add(ambientLight);

  new RGBELoader()
    .setPath("/models/")
    .load("char_enviorment.hdr", function (texture) {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      scene.environment = texture;
      scene.environmentIntensity = 0.8;
      scene.environmentRotation.set(5.76, 85.85, 1);
    });

  function setPointLight(screenLight: any) {
    if (screenLight && screenLight.material && screenLight.material.opacity > 0.9) {
      pointLight.intensity = screenLight.material.emissiveIntensity * 20;
    } else {
      pointLight.intensity = 0;
    }
  }

  const duration = 1.5;
  const ease = "power2.inOut";
  function turnOnLights() {
    gsap.to(scene, {
      environmentIntensity: 1.0,
      duration: duration,
      ease: ease,
    });
    gsap.to(frontKeyLight, {
      intensity: 2.5,
      duration: duration,
      ease: ease,
    });
    gsap.to(directionalLight, {
      intensity: 2.0,
      duration: duration,
      ease: ease,
    });
    gsap.to(".character-rim", {
      y: "55%",
      opacity: 1,
      delay: 0.2,
      duration: 2,
    });
  }

  return { setPointLight, turnOnLights };
};

export default setLighting;

