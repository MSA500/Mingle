import React from 'react'

export const ConfirmationPopup = ({cancleFun,confrimFun}) => {
  return (
        <div className='absolute top-0 left-0 z-40 bg-black/60 h-[100dvh] flex justify-center items-center w-full'>

        <div className='bg-gray-200 p-8 rounded-lg text-black'>
            <h1 className='font-bold mb-5'>Please Confirm to Delete</h1>
            <div className='flex justify-around gap-5'>
                <button className='bg-gray-400 hover:bg-gray-500 p-3 cursor-pointer active:scale-95 rounded-lg' onClick={cancleFun}>Cancel</button>
                <button className='bg-red-700 hover:bg-red-800 cursor-pointer p-2 active:scale-95 text-white font-bold rounded-lg' onClick={confrimFun}>Confirm</button>
            </div>
        </div>

        </div>
  )
}
