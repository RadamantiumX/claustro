import { useStateContext } from "../shared/ContextProviders"

export default function Index() {
  const { user }:any = useStateContext()
  return (
    <div>
      Welcome {user}
    </div>
  )
}
