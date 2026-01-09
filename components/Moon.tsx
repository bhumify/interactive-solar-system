 "use client";

 export default function Moon()
 {
  const moonOrbitSize = 40;
  return(
    <div
    className="absolute top-1/2 left-1/2"
    style={{
      width:moonOrbitSize,
      height:moonOrbitSize,
      marginLeft:-moonOrbitSize/2,
      marginTop:-moonOrbitSize/2,
      animation:"spin 4s linear infinite",
    }}    
    >
      <div className="absolute inset-0 rounded-full border border-white/20"></div>

      <div
      className="absolute bg-gray-300 rounded-full"
      style={{
        width:4,
        height:4,
        top:"50%",
        left:"100%",
        marginTop:-2,
      }}
     
      />

    </div>

    
  )
 }