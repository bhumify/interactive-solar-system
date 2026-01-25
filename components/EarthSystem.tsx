"use client";

import Moon from "./Moon";

export default function EarthSystem()
{
  const orbitSize = 320;
  return(
    <div
    className="absolute top-1/2 left-1/2"
    style={{
      width:orbitSize,
      height:orbitSize,
      marginLeft:-orbitSize/2,
      marginTop:-orbitSize/2,
      animation:"spin 16s linear infinite",
    }}
    >
      <div className="absolute inset-0 rounded-full border border-white/10"/>

      <div
      className="relative rounded-full bg-[#4f9cff]"
      style={{
        width:12,
        height:12,
        top:"50%",
        left:"100%",
        marginTop:-6,
      }}
       
      >
      <Moon/>
     </div>
    </div>
  )
}
