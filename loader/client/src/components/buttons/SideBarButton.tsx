import { Menu } from '../../icons/icons';
import { useStateContext } from '../../hooks/hooks';

export const SideBarButton = () => {
   const {over, setOver} = useStateContext()

  

    return (
        <>
         <button title='Menu' className='cursor-pointer hover:rotate-95 ease-in-out duration-500' onMouseOver={()=>setOver(true)}>
             <Menu mouseOver={over}/>
        </button>
        </>
    )
}