import { useStateContext } from "../../hooks/useCtxStates"
export const NavProgressBar = () => {
  const { responseTime } = useStateContext()


  return (
    <>
     <div style={{ animation: `load ${responseTime}s normal forwards` }} className="h-1 bg-amber-500"></div> 
    </>
  )
}


