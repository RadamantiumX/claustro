import { useStateContext } from "../../shared/ContextProviders"

export default function Index() {

   const { user } = useStateContext()
  return (
    <main>
      Welcome {user}
    </main>
  )
}
