import React, { useRef, useState, useMemo, useEffect } from "react";
import { useFrame } from "react-three-fiber";
import * as THREE from "three";
import { gsap } from "gsap";

import five from "../assets/five.png";

const Dice = ({ scale = [1, 1, 1], ...props }) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [active, setActive] = useState(false);

  // // Rotate mesh every frame, this is outside of React without overhead
  // useFrame(() => {
  //   mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  // });

  useFrame(() => {});

  useEffect(() => {
    gsap.to(mesh.current.position, {
      duration: 2.5,
      ease: "bounce.out",
      y: -6,
    });
  }, []);

  const texture = useMemo(() => new THREE.TextureLoader().load(five), []);

  // less performant cuz recreating new vector on rerender
  // useful if needed for matrix operations
  // may be useful to use zustand / useReducer for state management
  // initialize new Three.Vector3()
  // const scaleVector = new THREE.Vector3(...scale);

  return (
    <mesh
      {...props}
      ref={mesh}
      // scale={active ? scaleVector.addScalar(0.5) : scale}
      scale={active ? scale.map((s) => s + 0.5) : scale}
      onClick={(e) => setActive(!active)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshBasicMaterial attach="material" transparent side={THREE.DoubleSide}>
        <primitive attach="map" object={texture} />
      </meshBasicMaterial>
    </mesh>
  );
};

export default Dice;
