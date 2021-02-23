import React from "react";
import { Canvas } from "react-three-fiber";
import "./App.css";
import { Dice } from "./3d";

const App = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <group>
        <Dice position={[-1.2, 0, 0]} scale={[3, 3, 3]} />
        <Dice position={[2.5, 0, 0]} />
      </group>
    </Canvas>
  );
};

export default App;
