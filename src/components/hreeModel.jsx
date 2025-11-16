import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({ url }) {
  const gltf = useGLTF(url);
  return <primitive object={gltf.scene} />;
}

export default function ThreeModel() {
  return (
    <div className="w-full h-96">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5,5,5]} />
        <Suspense fallback={null}>
          <Model url="/models/your-model.glb" />
        </Suspense>
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  );
}
