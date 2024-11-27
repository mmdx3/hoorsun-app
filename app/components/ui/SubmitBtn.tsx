'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'
import ReactLoading from 'react-loading'

const SubmitBtn = ({ label , isLoading }: { label: string, isLoading?: boolean }) => {
  const { pending } = useFormStatus()

  return (
    <button
      type='submit'
      disabled={pending || isLoading}
      className={`w-full h-[35px] xl:h-[40px] rounded-lg p-2 flex justify-center items-center bg-[#D51F26] text-white font-bold text-[12px] xl:text-[14px] cursor-pointer hover:bg-[#e64147] transition-all duration-300 ease-in-out active:scale-[0.8] ${
        pending || isLoading ? 'disabled:bg-[#d500086b] text-white ' : ''
      }`}
    >
      {pending || isLoading? (
        <div className='flex justify-center gap-1 '>
          loading
          <ReactLoading type='bubbles' color='#fff' width={25} height={25} />
        </div>
      ) : (
        label
      )}
    </button>
  )
}

export default SubmitBtn
