import { Menu } from '../../../icons/Menu';
import { useStateContext } from '../../hooks/useCtxStates';

export const MenuButton = () => {
   const {over, setOver} = useStateContext()

    return (
        <>
         <button className='cursor-pointer' onMouseOver={()=>setOver(true)} onMouseLeave={()=>setOver(false)}>
             <Menu mouseOver={over}/>
        </button>  
        </>
    )
}