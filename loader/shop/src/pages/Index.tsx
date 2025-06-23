import { useStateContext } from "../shared/ContextProviders"

export default function Index() {
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const { user }:any = useStateContext()
  return (
    <div>
      Welcome {user}
    </div>
  )
}
