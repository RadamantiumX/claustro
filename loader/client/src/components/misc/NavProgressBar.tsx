import { useStateContext } from "../../hooks/useCtxStates"
export const NavProgressBar = () => {
  const { responseTime } = useStateContext()

  return (
    <>
     {responseTime !==0  ? <div style={{ animation: `load ${responseTime}s normal forwards` }} className="h-1 bg-amber-500"></div> :
      <></>
     } 
    </>
  )
}


