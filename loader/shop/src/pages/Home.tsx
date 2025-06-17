import { Link } from "react-router"
// import { trpc } from "../utils"

 export default function  Home () {
   

  return (
    <>
     
    <div className="flex flex-col items-center">

      <div className="flex flex-col justify-center items-center mt-20 gap-y-10">
        <h1 className="font-bold text-2xl">
      This is a Home Page
        </h1>
      <Link className="rounded-sm bg-amber-500 px-3 py-1 border-2 font-bold" to="/signin">Sign In</Link>
      </div>
      
    </div>
    
    </>
  )
}

