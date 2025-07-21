
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const AnimatedShape = ({ position, shape = 'box' }: { position: [number, number, number], shape?: 'box' | 'sphere' | 'torus' }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  const gradientMaterial = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
    },
    vertexShader: `
      varying vec3 vPosition;
      void main() {
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      varying vec3 vPosition;
      void main() {
        vec3 redColor = vec3(0.95, 0.31, 0.31); // red-500
        vec3 orangeColor = vec3(0.97, 0.55, 0.26); // orange-500
        float mixFactor = (sin(vPosition.x + time) + 1.0) * 0.5;
        vec3 color = mix(redColor, orangeColor, mixFactor);
        gl_FragColor = vec4(color, 0.8);
      }
    `,
    transparent: true,
  });

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
    }
    gradientMaterial.uniforms.time.value = state.clock.elapsedTime;
  });

  return (
    <mesh ref={meshRef} position={position} material={gradientMaterial}>
      {shape === 'sphere' && <sphereGeometry args={[0.5, 32, 32]} />}
      {shape === 'box' && <boxGeometry args={[0.8, 0.8, 0.8]} />}
      {shape === 'torus' && <torusGeometry args={[0.6, 0.2, 16, 32]} />}
    </mesh>
  );
};

const ThreeAnimation = () => {
  return (
    <div className="absolute inset-0 w-full h-full opacity-30">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff6b35" />
        
        <AnimatedShape position={[-2, 1, 0]} shape="box" />
        <AnimatedShape position={[2, -1, -1]} shape="sphere" />
        <AnimatedShape position={[0, 2, -2]} shape="torus" />
        <AnimatedShape position={[-1.5, -2, 1]} shape="sphere" />
        <AnimatedShape position={[1.5, 0, -0.5]} shape="box" />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
};

export default ThreeAnimation;
