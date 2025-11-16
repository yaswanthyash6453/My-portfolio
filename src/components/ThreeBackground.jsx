import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef();

  useEffect(() => {
    // skip on mobile to save perf
    if (window.innerWidth < 768) return;

    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    camera.position.z = 6;

    // lights
    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040, 0.6));

    // floating spheres
    const spheres = [];
    const geom = new THREE.SphereGeometry(0.8, 32, 32);
    for (let i = 0; i < 6; i++) {
      const mat = new THREE.MeshStandardMaterial({ color: new THREE.Color(`hsl(${(i*60)%360} 70% 55%)`), roughness: 0.35, metalness: 0.2 });
      const m = new THREE.Mesh(geom, mat);
      m.position.set((Math.random()-0.5)*8, (Math.random()-0.5)*4, (Math.random()-0.5)*4);
      scene.add(m);
      spheres.push({ mesh: m, speed: 0.002 + Math.random()*0.003, dir: Math.random() > 0.5 ? 1 : -1 });
    }

    const clock = new THREE.Clock();
    function animate() {
      const t = clock.getElapsedTime();
      spheres.forEach((s, idx) => {
        s.mesh.rotation.x += 0.002 + idx*0.0005;
        s.mesh.rotation.y += 0.0015;
        s.mesh.position.y += Math.sin(t * (0.5 + idx*0.1)) * s.speed * s.dir;
      });
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();

    // handle resize
    const onResize = () => {
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 -z-10 pointer-events-none" />;
}
