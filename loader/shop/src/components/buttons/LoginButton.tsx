import { Loader } from "../../icons/icons"


export const LoginButton = () =>{
    return(
        <>
        <button className="rounded-sm bg-blue-400 px-3 py-1 font-bold opacity-50" disabled>
           <div className="flex flex-row items-center gap-x-5"><Loader/> Loading...</div> 
        </button>
        </>
    )
}