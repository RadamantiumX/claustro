
export const NavProgressBar = () => {
  const value = 5
  return (
    <>
     <div style={{ animation: `load ${value}s normal forwards` }} className="h-1 bg-amber-500"></div> 
    </>
  )
}


