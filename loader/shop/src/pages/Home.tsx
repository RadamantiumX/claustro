
// import { trpc } from "../utils"
import { CustomLink } from "../components/CustomLink"
import { PageTitle } from "../components/PageTitle"

 export default function  Home () {
   

  return (
    <>
     
    <div className="flex flex-col items-center">

      <div className="flex flex-col justify-center items-center mt-20 gap-y-10">
        <PageTitle title="Welcome to... Unknow Area 🔍"/>
        <CustomLink inner="Sign In" route="/signin" color="red"/>
      </div>
      
    </div>
    
    </>
  )
}

