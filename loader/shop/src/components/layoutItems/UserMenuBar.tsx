import { useStateContext } from "../../hooks/useCtxStates"
import { MenuLinks } from "../buttons/MenuLinks"
import { LogoutButton } from "../buttons/LogoutButton"


export const UserMenuBar = () => {
    const {show} = useStateContext()
  return (
    <div>
        <nav className={!show ? 'user-menu-hide':'user-menu-display'}>
          <div className="p-5 flex flex-col gap-y-5">
              <MenuLinks>Settings</MenuLinks>
              <LogoutButton/>
          </div>
       </nav>
    </div>
    
  )
}
