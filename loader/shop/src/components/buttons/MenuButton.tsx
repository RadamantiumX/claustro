import { Menu } from '../../icons/Menu';
import { useStateContext } from '../../hooks/useCtxStates';

export const MenuButton = () => {
   const {over, setOver} = useStateContext()

   const onDalayMouseLeave = () =>{
    setTimeout(()=>{
        setOver(false)
    },2000)
   }

    return (
        <>
         <button className='cursor-pointer hover:rotate-95 ease-in-out duration-500' onMouseOver={()=>setOver(true)} onMouseLeave={onDalayMouseLeave}>
             <Menu mouseOver={over}/>
        </button>  
        </>
    )
}