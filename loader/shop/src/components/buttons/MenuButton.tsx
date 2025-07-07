import { Menu } from '../../icons/Menu';
import { useStateContext } from '../../hooks/useCtxStates';

export const MenuButton = () => {
   const {over, setOver} = useStateContext()

    return (
        <>
         <button className='cursor-pointer hover:rotate-95 ease-in-out duration-500' onMouseOver={()=>setOver(true)} onMouseLeave={()=>setOver(false)}>
             <Menu mouseOver={over}/>
        </button>  
        </>
    )
}