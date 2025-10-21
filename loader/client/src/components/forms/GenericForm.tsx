import React from 'react'


export const GenericForm = ():React.ReactNode => {
  return (
   <>
      <div className='w-[50%]'>
            <form action="">
               <div className='flex flex-col gap-y-4'>

                <div>
                   <label htmlFor="email-source" className='flex flex-row items-center gap-3'>Email Source <div className="w-[70%]" >
                </div>
                </label>
                 <div className="relative w-full">
                    <input
                      type="text"
                      id="id"
                      name="name"
                      placeholder="placeholder"
                      className="w-full p-4 pr-12 transition-all bg-transparent border rounded-lg outline-none border-slate-200 focus:border-blue-500"
                    /> 
                  </div>
                </div>
               
               
              <div>
                <label htmlFor="email-source-psw" className='flex flex-row items-center gap-3'>Email Source <div className="w-[70%]">
                </div>
                </label>
                 <div className="relative w-full">
                    <input
                      type="text"
                      id="id"
                      name="name"
                      placeholder="placeholder"
                      className="w-full p-4 pr-12 transition-all bg-transparent border rounded-lg outline-none border-slate-200 focus:border-blue-500"
                    /> 
                  </div>
              </div>
               
               
               </div>
              
              </form>
          </div>
   </>
  )
}
