import { useStateContext } from "../../hooks/useCtxStates"

export const NotificationCard = () => {
  const {notification} = useStateContext()

  return (
    <div className={'flex justify-center'}>
    <div className='card-hide'>
       <p className="text-gray-600">{notification} ⚠️</p>
       <div style={{ animation: `load 5s normal forwards` }} className="h-1 bg-amber-500"></div>
    </div>
    </div>
   
  )
}
