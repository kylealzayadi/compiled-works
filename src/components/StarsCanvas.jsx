import { useState, useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const getRandomStarColor = () => {
  const colors = [
    [1.0, 1.0, 1.0],  // White
    [1.0, 0.0, 0.0],  // Red
    [0.3, 0.3, 0.0],  // Yellow
    [0.0, 0.0, 0.9],  // Blue
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};


const Stars = (props) => {
  const ref = useRef();
  // Ensure the positions array length is divisible by 3 for x/y/z triplets
  const starCount = 9999;
  const [sphere] = useState(() => random.inSphere(new Float32Array(starCount), { radius: 4 }));
  const [colors] = useState(() => {
    const colorArray = new Float32Array(sphere.length);
    for (let i = 0; i < sphere.length; i += 3) {
      const color = getRandomStarColor();
      colorArray[i] = color[0];
      colorArray[i + 1] = color[1];
      colorArray[i + 2] = color[2];
    }
    return colorArray;
  });

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta / 60;
    ref.current.rotation.y -= delta / 70;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} colors={colors} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          vertexColors
          size={0.01}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const ScrollCamera = () => {
  const { camera, size, gl } = useThree();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useFrame(() => {
    camera.position.x = scrollY * 0.0002;
    camera.position.z = 0.5 + scrollY * 0.0008;
    camera.lookAt(0, 0, 0); // Ensure the camera always looks at the origin
    camera.rotateX(0.3);
    camera.rotateY(-0.2);
    camera.rotateZ(-0.2);
  });

  return null;
};

const StarsCanvas = () => {
  return (
    <div className="stars-canvas">
      <Canvas camera={{ position: [0, 0, 0.5] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <ScrollCamera />
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
