/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTRPC } from "../utils/trpc"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"



// TODO make a search data mutation here!
export const useSearchData = () => {
   const trpc = useTRPC()
   const search = useMutation(trpc.data.search.mutationOptions())
   const [ searchData, setSearchData ]:any = useState([])
   const [inputValue, setInputValue] = useState('')
  const [loading,setLoading] = useState(false)

  

   // TODO: change the TYPE EVENT ⬇️
   
   const handleEnter = (e:any) =>{
      
      if(e.key === 'Enter' && inputValue !== ''){
        setLoading(true)
      
         e.preventDefault()
         console.log(`Your search: ${inputValue}`)
        
         
         try{
        search.mutate({ entry:inputValue, page:1, pageSize:5 },{
            onSuccess:(data:any, variables)=>{
              console.log(data)
              console.log(data?.length)
              console.log(variables)
              setSearchData(data)
              setLoading(false)
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



 return { searchData, setSearchData, handleEnter, setInputValue, inputValue, loading }
}
