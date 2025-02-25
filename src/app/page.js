"use client"
import { useEffect, useState } from "react";

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const unit = 50;

 

  setInterval(() => {
    position.x++

  }, 2000);



  return (
    <div id="gaming-board" className="bg-white w-[500px] h-[500px] 
    justify-self-center mt-[50%] translate-y-[-50%] relative ">
      <div id="snake" className="bg-pink-600 w-[50px] h-[50px] absolute"
        style={{ left: position.x, top: position.y }} ></div>




    </div>
  );
}
