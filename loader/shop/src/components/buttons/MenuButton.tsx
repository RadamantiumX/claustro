import { Menu } from '../../../icons/Menu';
import { useMouseOver } from '../../hooks/useMouseOver';

export const MenuButton = () => {
    const {over, setOver} = useMouseOver()
    return (
        <>
         <button className='cursor-pointer' onMouseOver={()=>setOver(true)} onMouseLeave={()=>setOver(false)}>
             <Menu mouseOver={over}/>
        </button>  
        </>
    )
}