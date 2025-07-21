import React, {useState} from 'react'

export const UserMenuBar = () => {
    const [show, setShow] = useState(false)
    const handleClick = () =>{
      if(!show){
        setShow(true)
      }else{
        setShow(false)
      }
    }
  return (
    <div>
        {/*<nav className={!show ? 'h-1/2 w-40 transition -translate-y-full bg-amber-800 top-10 right-0 ease-in-out relative':'h-1/2 w-40 transition bg-amber-800 top-10 right-0 ease-in-out relative'}>

       </nav>*/}
       <nav className='h-1/2 w-40 absolute bg-amber-500 rounded-sm'>

       </nav>
       <button onClick={handleClick} className='cursor-pointer w-20 absolute rounded-sm bg-amber-500 p-2'>Click</button>
    </div>
    
  )
}
