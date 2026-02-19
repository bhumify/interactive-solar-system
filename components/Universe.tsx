
import React from "react";
import Stars from "./Stars";
import Shootingstars from "./Shootingstars";
import SolarSystem from "./SolarSystem";

const Universe: React.FC = () => {
  
  const shootingStarsData = [
    { left: 10, direction: 1, angle: 45, duration: 2, id: 1 },
    { left: 30, direction: -1, angle: 60, duration: 3, id: 2 },
    { left: 70, direction: 1, angle: 30, duration: 1.5, id: 3 },
    { left: 50, direction: -1, angle: 50, duration: 2.5, id: 4 },
  ];

  return (
    <div className="fixed inset-0 bg-black overflow-hidden">
      <Stars />
      <Shootingstars stars={shootingStarsData} />
      <SolarSystem />
    </div>
  );
};

export default Universe;

