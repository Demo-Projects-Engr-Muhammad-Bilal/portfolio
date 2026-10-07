"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";
import { useTheme } from "next-themes";
import * as THREE from "three";

type Pointer = { x: number; y: number };

const PALETTE = {
  light: { lime: "#c6f432", lavender: "#cdbfff", peach: "#ffcdb5", sky: "#b9dfff", mint: "#bdf0d6" },
  dark: { lime: "#c6f432", lavender: "#7c6bd0", peach: "#d98a68", sky: "#5a97cf", mint: "#52b88a" },
};

/** Soft clay material: high roughness, no metal. */
function Clay({ color }: { color: string }) {
  return <meshStandardMaterial color={color} roughness={0.85} metalness={0} />;
}

/** Idle float (Drei) or a static group when the user prefers reduced motion. */
function Idle({ children, reduce, speed = 1.2 }: { children: ReactNode; reduce: boolean; speed?: number }) {
  if (reduce) return <>{children}</>;
  return (
    <Float speed={speed} rotationIntensity={0.9} floatIntensity={1.1} floatingRange={[-0.15, 0.15]}>
      {children}
    </Float>
  );
}

function Cluster({ pointer, reduce, dark }: { pointer: React.RefObject<Pointer>; reduce: boolean; dark: boolean }) {
  const group = useRef<THREE.Group>(null);
  const c = dark ? PALETTE.dark : PALETTE.light;

  // Subtle mouse parallax (damped)
  useFrame((_, delta) => {
    const g = group.current;
    if (!g || reduce) return;
    const { x, y } = pointer.current;
    g.position.x = THREE.MathUtils.damp(g.position.x, x * 0.35, 3, delta);
    g.position.y = THREE.MathUtils.damp(g.position.y, y * 0.25, 3, delta);
    g.rotation.y = THREE.MathUtils.damp(g.rotation.y, x * 0.3, 3, delta);
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, -y * 0.2, 3, delta);
  });

  return (
    <group ref={group}>
      {/* big lime sphere, top right */}
      <Idle reduce={reduce} speed={1.1}>
        <mesh position={[2.05, 2.05, 0.6]}>
          <sphereGeometry args={[0.62, 48, 48]} />
          <Clay color={c.lime} />
        </mesh>
      </Idle>

      {/* lavender rounded cube, bottom left */}
      <Idle reduce={reduce} speed={1.4}>
        <RoundedBox args={[0.95, 0.95, 0.95]} radius={0.24} smoothness={6} position={[-2.0, -1.95, 0.7]} rotation={[0.5, 0.6, 0.1]}>
          <Clay color={c.lavender} />
        </RoundedBox>
      </Idle>

      {/* peach torus, top left */}
      <Idle reduce={reduce} speed={1.0}>
        <mesh position={[-1.35, 2.45, 0.3]} rotation={[1.1, 0.4, 0.2]}>
          <torusGeometry args={[0.5, 0.2, 32, 64]} />
          <Clay color={c.peach} />
        </mesh>
      </Idle>

      {/* small sky sphere, right */}
      <Idle reduce={reduce} speed={1.6}>
        <mesh position={[2.1, -1.1, 0.9]}>
          <sphereGeometry args={[0.36, 40, 40]} />
          <Clay color={c.sky} />
        </mesh>
      </Idle>

      {/* small mint rounded cube, left */}
      <Idle reduce={reduce} speed={1.3}>
        <RoundedBox args={[0.55, 0.55, 0.55]} radius={0.16} smoothness={5} position={[-2.1, 0.7, 0.5]} rotation={[0.3, -0.5, 0.4]}>
          <Clay color={c.mint} />
        </RoundedBox>
      </Idle>

      {/* tiny lime torus, bottom right */}
      <Idle reduce={reduce} speed={1.8}>
        <mesh position={[1.3, -2.45, 0.4]} rotation={[0.9, 0.2, 0.6]}>
          <torusGeometry args={[0.32, 0.13, 24, 48]} />
          <Clay color={c.lime} />
        </mesh>
      </Idle>
    </group>
  );
}

export default function HeroScene3D({ reduceMotion = false, active = true }: { reduceMotion?: boolean; active?: boolean }) {
  const { resolvedTheme } = useTheme();
  const pointer = useRef<Pointer>({ x: 0, y: 0 });

  useEffect(() => {
    if (reduceMotion) return;
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduceMotion]);

  const dark = resolvedTheme === "dark";

  return (
    <Canvas
      className="!pointer-events-none"
      camera={{ position: [0, 0, 9], fov: 35 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      frameloop={reduceMotion ? "demand" : active ? "always" : "never"}
    >
      <ambientLight intensity={dark ? 0.9 : 1.15} />
      <hemisphereLight args={["#ffffff", dark ? "#2a3150" : "#c9d3ea", 0.6]} />
      <directionalLight position={[4, 5, 6]} intensity={dark ? 1.6 : 1.9} />
      <directionalLight position={[-5, -3, 3]} intensity={0.45} color={dark ? "#7c8cff" : "#ffd9c4"} />
      <Cluster pointer={pointer} reduce={reduceMotion} dark={dark} />
    </Canvas>
  );
}
