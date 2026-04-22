"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingParticles() {
  const ref = useRef<THREE.Points>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  useMemo(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const positions = useMemo(() => {
    const positions = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      // Slow rotation based on time
      ref.current.rotation.x += 0.0003;
      ref.current.rotation.y += 0.0005;

      // Subtle parallax based on mouse
      const targetX = mousePos.current.x * 0.5;
      const targetY = mousePos.current.y * 0.5;
      ref.current.rotation.x += (targetY - ref.current.rotation.x * 10) * 0.001;
      ref.current.rotation.y += (targetX - ref.current.rotation.y * 10) * 0.001;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00ff9c"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
}

function GridPlane() {
  const ref = useRef<THREE.GridHelper>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useMemo(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state) => {
    if (ref.current) {
      // Subtle movement based on mouse
      ref.current.position.x += (mousePos.current.x * 2 - ref.current.position.x) * 0.02;
      ref.current.position.z += (mousePos.current.y * 2 - ref.current.position.z) * 0.02;
    }
  });

  return (
    <gridHelper
      ref={ref}
      args={[30, 40, "#0a1f1a", "#0a1f1a"]}
      position={[0, -8, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

function Scene() {
  return (
    <>
      <FloatingParticles />
      <GridPlane />
    </>
  );
}

export function Background3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-60 md:opacity-80">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "low-power",
        }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
