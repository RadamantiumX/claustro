import { useStateContext } from "../../hooks/useCtxStates"

export const NotificationCard = () => {
  const {notification} = useStateContext()

  return (
    <div className={'flex justify-center'}>
    <div className={notification.match('Success')?'card-hide bg-green-600':'card-hide bg-red-600'}>
       <p className="text-gray-300 text-[15px]">{notification}</p>
       <div style={{ animation: `load 5s normal forwards` }} className={"h-1 bg-amber-500"}></div>
    </div>
    </div>
   
  )
}
