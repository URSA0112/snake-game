"use client"
import { useEffect, useState } from "react";

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [direction, setDirection] = useState("")
  const unit = 50;

  useEffect(() => {
    const HandleKeyBoardMovement = (e) => {
      switch (e.key) {
        case "ArrowUp": setDirection("UP"); console.log(direction)
          break;
        case "ArrowDown": setDirection("DOWN"); console.log(direction)
          break;
        case "ArrowLeft": setDirection("LEFT"); console.log(direction)
          break;
        case "ArrowRight": setDirection("RIGHT"); console.log(direction)
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
        if (direction === "RIGHT") return { x: prev.x + unit, y: prev.y }
        if (direction === "LEFT") return { x: prev.x - unit, y: prev.y }
        if (direction === "DOWN") return { y: prev.y + unit, x: prev.x }
        if (direction === "UP") return { y: prev.y - unit, x: prev.x }
        return prev;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [direction,position])




  return (
    <div id="gaming-board" className="bg-white w-[500px] h-[500px] 
    justify-self-center mt-[50%] translate-y-[-50%] relative ">
      <div id="snake" className="bg-pink-600 w-[50px] h-[50px] absolute"
        style={{ left: position.x, top: position.y }}
      ></div>

    </div>
  );
}
