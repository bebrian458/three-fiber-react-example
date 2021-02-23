import React from "react";
import { Canvas } from "react-three-fiber";
import "./App.css";
import { Dice, Floor } from "./3d";

const App = () => {
  return (
    <Canvas camera={{ position: [0, 0, 15] }}>
      {/* <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} /> */}

      <group>
        <Dice position={[-1.5, 10, 0]} />
        <Dice position={[1.5, 10, 0]} />
      </group>
      <Floor position={[0, -7, 0]} />
    </Canvas>
  );
};

export default App;
