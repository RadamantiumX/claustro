import { useStateContext } from "../../hooks/useCtxStates"

export const UserMenuBar = () => {
    const {show} = useStateContext()
  return (
    <div>
        <nav className={!show ? 'user-menu-hide':'user-menu-display'}>

       </nav>
    </div>
    
  )
}
