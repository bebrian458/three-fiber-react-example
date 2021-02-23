import React, { useRef } from "react";

const Floor = ({ scale = [10, 1, 10], ...props }) => {
  const mesh = useRef();

  return (
    <mesh {...props} scale={scale} ref={mesh}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="green" />
    </mesh>
  );
};

export default Floor;
