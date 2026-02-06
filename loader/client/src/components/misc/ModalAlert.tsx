import React from 'react'

export const ModalAlert = ():React.ReactNode => {
  return (
    <><div className='fixed inset-0 flex transition-opacity items-center justify-center z-50'>
        <div className='bg-amber-600 p-6 rounded-md w-[20%]'>
            ModalAlert
        </div>
    </div>
    {/*<div id="confirmation" className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center h-screen pt-4 px-4 pb-20 text-center">
            <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <h3 className="text-xl leading-6 font-medium text-gray-900">
                        Confirmation
                    </h3>
                    <div className="mt-2">
                        <p className="text-sm text-gray-500">
                            Do you want to allow access to your location?
                        </p>
                    </div>
                </div>
                <div className="bg-white px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button id="allow" type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
                        Allow
                    </button>
                    <button id="deny" type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                        Deny
                    </button>
                </div>
            </div>
        </div>
    </div>*/}
    </>
  )
}
