import { useStateContext } from "../../hooks/useCtxStates"

export const UserMenuBar = () => {
    const {show} = useStateContext()
  return (
    <div>
        <nav className={!show ? 'h-1/2 w-40 transition -translate-y-full bg-amber-800 top-10 right-0 ease-in-out absolute':'h-1/2 w-40 transition bg-amber-800 top-10 right-0 ease-in-out absolute'}>

       </nav>
    </div>
    
  )
}
