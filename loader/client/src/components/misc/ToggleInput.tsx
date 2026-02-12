import { useToggleValue } from "../../hooks/hooks"

export const ToggleInput = ():React.ReactNode => {
    const { value, handleClickToggle } = useToggleValue()
  return (
    <>
    <div className='flex flex-row gap-5 items-center'>
      <div className="relative inline-block w-11 h-6">
  
 
  <input
    id="isSuperAdmin"
    name='isSuperAdmin'
    type="checkbox"
    className="peer sr-only appearance-none"
    onChange={(e)=>console.log(e.target.checked)}
    onClick={handleClickToggle}
  />

  <label
    htmlFor="isSuperAdmin"
    className="absolute top-0 left-0 w-11 h-6 bg-gray-300 rounded-full cursor-pointer transition-colors duration-300 peer-checked:bg-blue-600"
  ></label>

  
  <label
    htmlFor="isSuperAdmin"
    className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md cursor-pointer transition-transform duration-300 peer-checked:translate-x-5"
  ></label>
  </div>
  <div className={value === 0 ?'bg-red-700 px-2 py-0.5 rounded-md opacity-25 line-through' : 'bg-green-700 px-2 py-0.5 rounded-md'}>
    <p className='font-bold'>
    {}
  </p>
  </div>
  
</div>
    </>
  )
}
