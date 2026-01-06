"use client"
export default function Stars() {
  const stars = Array.from({ length: 150 });

  return (
    <div className="absolute inset-0">
      {stars.map((_, i) => {
        const size = Math.random() * 2 + 1;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const opacity = Math.random();

        return (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: size,
              height: size,
              top: `${top}%`,
              left: `${left}%`,
              opacity,
            }}
          />
        );
      })}
    </div>
  );
}
