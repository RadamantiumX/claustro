/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTRPC } from "../utils/trpc"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"


// TODO make a search data mutation here!
export const useSearchData = () => {
   const trpc = useTRPC()
   const search = useMutation(trpc.data.search.mutationOptions())
   const [ searchData, setSearchData ]:any = useState([])
   const [inputValue, setInputValue] = useState('')
   const [searchParams, setSearchParams] = useSearchParams()

  

   // TODO: change the TYPE EVENT ⬇️
   
   const handleEnter = (e:any) =>{
      
      if(e.key === 'Enter' && inputValue !== ''){
         setSearchParams({})
         console.log(searchParams)
         e.preventDefault()
         console.log(`Your search: ${inputValue}`)
         setSearchParams({search:inputValue})
         
         try{
        search.mutate({ entry:inputValue, page:1, pageSize:5 },{
            onSuccess:(data:any, variables)=>{
              console.log(data)
              console.log(data?.length)
              console.log(variables)
              searchData(data)
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
