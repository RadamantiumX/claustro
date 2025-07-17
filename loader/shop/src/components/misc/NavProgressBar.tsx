import { useStateContext } from "../../hooks/useCtxStates"
export const NavProgressBar = () => {
  const { responseTime } = useStateContext()

  if(responseTime !== 0){
    console.log('have value higher than 0 is: '+responseTime)
  }else{
    console.log('Is 0')
  }
  return (
    <>
     {responseTime !==0  ? <div style={{ animation: `load ${responseTime}s normal forwards` }} className="h-1 bg-amber-500"></div> :
      <></>
     } 
    </>
  )
}


