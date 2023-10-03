"use client";
import Dot from "@/components/Dot";
import { useEffect, useState } from "react";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handler);

    return () => {
      window.removeEventListener("mousemove", handler);
    };
  });

  return (
    <div className="flex flex-wrap w-[1000px] gap-20 mx-auto p-10">
      {Array.from({ length: 60 }, (_, i) => (
        <Dot key={i} mousePos={mousePos} />
      ))}
    </div>
  );
}
