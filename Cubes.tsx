npm install gsap

// CREDIT
// Component inspired from Can Tastemel's original work for the lambda.ai landing page
// https://cantastemel.com
  
import Cubes from './Cubes'

<div style={{ height: '600px', position: 'relative' }}>
  <Cubes 
    gridSize={8}
    maxAngle={60}
    radius={4}
    borderStyle="2px dashed #5227FF"
    faceColor="#1a1a2e"
    rippleColor="#ff6b6b"
    rippleSpeed={1.5}
    autoAnimate={true}
    rippleOnClick={true}
  />
</div>

import React, { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";


const Cubes: React.FC<CubesProps> = ({
  gridSize = 10,
  cubeSize,
  maxAngle = 45,
  radius = 3,
  easing = "power3.out",
  duration = { enter: 0.3, leave: 0.6 },
  cellGap,
  borderStyle = "1px solid #fff",
  faceColor = "#060010",
  shadow = false,
  autoAnimate = true,
  rippleOnClick = true,
  rippleColor = "#fff",
  rippleSpeed = 2,
}) => {
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);
  const userActiveRef = useRef(false);
  const simPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const simTargetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const simRAFRef = useRef<number | null>(null);

//rest of the code 
  return (
    <div
      className="relative w-1/2 max-md:w-11/12 aspect-square"
      style={wrapperStyle}
    >
      <div ref={sceneRef} className="grid w-full h-full" style={sceneStyle}>
        {cells.map((_, r) =>
          cells.map((__, c) => (
            <div
              key={`${r}-${c}`}
              className="cube relative w-full h-full aspect-square [transform-style:preserve-3d]"
              data-row={r}
              data-col={c}
            >
              <span className="absolute pointer-events-none -inset-9" />

              <div
                className="cube-face absolute inset-0 flex items-center justify-center"
                style={{
                  background: "var(--cube-face-bg)",
                  border: "var(--cube-face-border)",
                  boxShadow: "var(--cube-face-shadow)",
                  transform: "translateY(-50%) rotateX(90deg)",
                }}
              />
              <div
                className="cube-face absolute inset-0 flex items-center justify-center"
                style={{
                  background: "var(--cube-face-bg)",
                  border: "var(--cube-face-border)",
                  boxShadow: "var(--cube-face-shadow)",
                  transform: "translateY(50%) rotateX(-90deg)",
                }}
              />
              <div
                className="cube-face absolute inset-0 flex items-center justify-center"
                style={{
                  background: "var(--cube-face-bg)",
                  border: "var(--cube-face-border)",
                  boxShadow: "var(--cube-face-shadow)",
                  transform: "translateX(-50%) rotateY(-90deg)",
                }}
              />
              <div
                className="cube-face absolute inset-0 flex items-center justify-center"
                style={{
                  background: "var(--cube-face-bg)",
                  border: "var(--cube-face-border)",
                  boxShadow: "var(--cube-face-shadow)",
                  transform: "translateX(50%) rotateY(90deg)",
                }}
              />
              <div
                className="cube-face absolute inset-0 flex items-center justify-center"
                style={{
                  background: "var(--cube-face-bg)",
                  border: "var(--cube-face-border)",
                  boxShadow: "var(--cube-face-shadow)",
                  transform: "rotateY(-90deg) translateX(50%) rotateY(90deg)",
                }}
              />
              <div
                className="cube-face absolute inset-0 flex items-center justify-center"
                style={{
                  background: "var(--cube-face-bg)",
                  border: "var(--cube-face-border)",
                  boxShadow: "var(--cube-face-shadow)",
                  transform: "rotateY(90deg) translateX(-50%) rotateY(-90deg)",
                }}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cubes;
