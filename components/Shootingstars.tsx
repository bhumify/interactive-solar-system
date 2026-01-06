"use client";
import { useState, useEffect } from "react";

export default function Shootingstars() {
  const [stars, setStars] = useState<any[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const top = Math.random() * 50;
      const left = Math.random() * 100;
      const angle = Math.random() * 50 + 20;
      const direction = Math.random() > 0.5 ? 1 : -1;
      const duration = Math.random() * 1 + 1.5; 
      const id = Date.now();

      const newStar = { top, left, angle, direction, duration, id };
      setStars((prev) => [...prev, newStar]);

      
      setTimeout(() => {
        setStars((prev) => prev.filter((s) => s.id !== id));
      }, duration * 1000);
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute bg-white"
          style={{
            width: "80px",
            height: "2px",
            top: `${s.top}%`,
            left: `${s.left}%`,
            opacity: 0,
            "--angle": `${s.direction * s.angle}deg`,
            "--dir": s.direction,
            animation: `shoot ${s.duration}s linear 0s forwards`,
          }}
        />
      ))}
    </div>
  );
}
