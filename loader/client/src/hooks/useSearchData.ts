/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTRPC } from "../utils/trpc"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useStateContext } from "./useCtxStates"


// TODO make a search data mutation here!
export const useSearchData = () => {
   const trpc = useTRPC()
   const search = useMutation(trpc.data.search.mutationOptions())
   const [ searchData, setSearchData ]:any = useState([])
   const [inputValue, setInputValue] = useState('')
   const [searchParams, setSearchParams] = useSearchParams()
   const { setData } = useStateContext()
  

   // TODO: change the TYPE EVENT ⬇️
   
   const handleEnter = (e:any) =>{
      
      if(e.key === 'Enter' && inputValue !== ''){
         console.log(searchParams)
         e.preventDefault()
         console.log(`Your search: ${inputValue}`)
         setSearchParams({search:inputValue})
         
         try{
        search.mutate({ payload:inputValue },{
            onSuccess:(data:any, variables)=>{
              console.log(data)
              console.log(data?.length)
              console.log(variables)
              setData(data)
            },
            onError:(error)=>{
                console.log(error)
            }
        })

      }catch(error){
        console.log(error)
      }

      }
     
   }



 return { searchData, setSearchData, handleEnter, setInputValue, inputValue }
}
