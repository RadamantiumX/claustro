import { useStateContext } from "../../hooks/custom/useCtxStates"
import { UserMenuLinks } from "../buttons/UserMenuLinks"
import { LogoutButton } from "../buttons/LogoutButton"


export const UserMenuBar = () => {
    const {show} = useStateContext()
  return (
    <div>
        <nav className={!show ? 'user-menu-hide':'user-menu-display'}>
          <div className="p-5 flex flex-col gap-y-5">
              <UserMenuLinks>Settings</UserMenuLinks>
              <LogoutButton/>
          </div>
       </nav>
    </div>
    
  )
}
