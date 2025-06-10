import { Link } from "react-router"
// import { trpc } from "../utils"

 export default function  Home () {
   

  return (
    <>
     
    <div>
      <h1>
      This is a Home Page
    </h1>
      <Link to="/signin">Sign In</Link>
    </div>
    
    </>
  )
}

