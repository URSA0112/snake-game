"use client"
import { useEffect, useState } from "react";

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [direction, setDirection] = useState("RIGHT")
  const unit = 50;

  useEffect(() => {
    const HandleKeyBoardMovement = (e) => {
      switch (e.key) {
        case "ArrowUp": setDirection("UP"); console.log("up")
          break;
        case "ArrowDown": setDirection("DOWN"); console.log("down")
          break;
        case "ArrowLeft": setDirection("LEFT"); console.log("left")
          break;
        case "ArrowRight": setDirection("RIGHT"); console.log("right")
          break;
          default:
          break;

      }
    };
    window.addEventListener("keydown", HandleKeyBoardMovement);
    return () => window.removeEventListener("keydown", HandleKeyBoardMovement)

  }, [])
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        if (direction === "RIGHT") { return { ...prev, x: prev.x + unit  } }
        if (direction === "LEFT") { return { ...prev, x: prev.x - unit } }
        if (direction === "DOWN") { return { ...prev, y: prev.y + unit } }
        if (direction === "UP") { return {  ...prev,y: prev.y - unit } };
        return prev;
      })
    }, 1000)

  }, [direction])




  return (
    <div id="gaming-board" className="bg-white w-[500px] h-[500px] 
    justify-self-center mt-[50%] translate-y-[-50%] relative ">
      <div id="snake" className="bg-pink-600 w-[50px] h-[50px] absolute"
        style={{ left: position.x, top: position.y }}
      ></div>

    </div>
  );
}
