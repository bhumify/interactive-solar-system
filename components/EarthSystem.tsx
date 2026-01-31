

"use client";

import Moon from "./Moon";

type EarthSystemProps = {
  isActive: boolean;
  onHover: (name: string | null) => void;
};

export default function EarthSystem({ isActive, onHover }: EarthSystemProps) {
  const orbitSize = 320;
  const HITBOX = 36;

  return (
    <div
      className="absolute top-1/2 left-1/2 pointer-events-none"
      style={{
        width: orbitSize,
        height: orbitSize,
        marginLeft: -orbitSize / 2,
        marginTop: -orbitSize / 2,
        animation: "spin 16s linear infinite",
      }}
    >
   
      <div className="absolute inset-0 rounded-full border border-white/10" />

 
      <div
        className="absolute pointer-events-auto"
        style={{
          width: HITBOX,
          height: HITBOX,
          left: orbitSize - HITBOX / 2,
          top: orbitSize / 2 - HITBOX / 2,
        }}
        onPointerEnter={() => onHover("Earth")}
        onPointerLeave={() => onHover(null)}
      >
        <div
          className={`rounded-full bg-[#4f9cff] transition-all duration-200 ${
            isActive
              ? "shadow-[0_0_14px_4px_rgba(79,156,255,0.8)] scale-110"
              : ""
          }`}
          style={{ width: 12, height: 12 }}
        >
          <Moon />
        </div>

        {isActive && (
          <div className="absolute left-10 top-1/2 -translate-y-1/2 whitespace-nowrap bg-black/70 text-white text-xs px-3 py-1 rounded-md border border-white/20 backdrop-blur">
            <strong>Earth</strong>
          </div>
        )}
      </div>
    </div>
  );
}

