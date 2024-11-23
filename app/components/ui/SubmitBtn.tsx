import React from 'react'

const SubmitBtn = ({ label }: { label: string }) => {
  return (
    <button
      type='submit'
      className='w-full h-[35px] xl:h-[40px] rounded-lg p-2 flex justify-center items-center bg-[#D51F26] text-white font-bold text-[12px] xl:text-[14px] cursor-pointer hover:bg-[#e64147] transition-all duration-300 ease-in-out active:scale-[0.8]'
    >
      {label}
    </button>
  )
}

export default SubmitBtn
