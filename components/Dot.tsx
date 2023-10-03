import React, { useEffect, useRef } from "react";
import { motion, useSpring } from "framer-motion";

const BIG_SIZE = 80;
const SMALL_SIZE = 5;
const PER_PX = 0.5;

export default function Dot({
  mousePos,
}: {
  mousePos: { x: number; y: number };
}) {
  const size = useSpring(SMALL_SIZE, { damping: 30, stiffness: 200 });

  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dotRef.current) return;
    const { x, y } = mousePos;
    const { x: dotX, y: dotY } = dotRef.current.getBoundingClientRect();

    const distance = Math.sqrt(
      Math.pow(Math.abs(x - dotX), 2) + Math.pow(Math.abs(y - dotY), 2)
    );

    size.set(Math.max(BIG_SIZE - PER_PX * distance, SMALL_SIZE));
  }, [mousePos, size]);
  return (
    <div ref={dotRef} className="relative">
      <motion.div
        className="bg-blue-600 rounded-full absolute -translate-y-1/2 -translate-x-1/2"
        style={{ width: size, height: size }}
      />
    </div>
  );
}
