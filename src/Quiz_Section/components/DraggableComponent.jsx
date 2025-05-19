import { useRef, useState } from "react";

export const DraggableComponent = ({ children }) => {
  const [position, setPosition] = useState({ x: 70, y: 70 });
  const touchRef = useRef(null);

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    touchRef.current.startX = touch.clientX - position.x;
    touchRef.current.startY = touch.clientY - position.y;
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    const newX = touch.clientX - touchRef.current.startX;
    const newY = touch.clientY - touchRef.current.startY;
    setPosition({ x: newX, y: newY });
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      ref={touchRef}
      style={{
        position: "absolute",
        top: `${position.y}vh`,
        left: `${position.x}vw`,
        width: "70px",
        height: "70px",
        touchAction: "none",
        backgroundColor: "orange",
        cursor: "grab",
        color: "white",
        borderRadius: "50%",
        zIndex: 100,
        boxShadow: "0 0 10px rgba(245 158 38, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};
