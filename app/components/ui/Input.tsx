import Image from 'next/image'
import React from 'react'

type InputProps = {
  name: string
  placeholder: string
  type: string
  value?: string
  onChange?: any
  className?: string
  label: string
  error: string[] | undefined
  icon: any
}

const Input = ({
  name,
  placeholder,
  type,
  value,
  onChange,
  className,
  label,
  error,
  icon,
  ...other
}: InputProps & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className='w-full h-[67px] xl:h-[77px] gap-[7px] xl:gap-[9px] flex flex-col items-end justify-center'>
      <label
        htmlFor={name}
        className='pr-[10px] font-dana font-medium text-[11px] xl:text-[13px] text-[#242424]'
      >
        {label}
      </label>
      <div className='w-full flex flex-col gap-[4px]'>
        <div className='w-full h-[38px] xl:h-[44px] rounded-[8px] border-[1px] border-[#D6D6D6]  p-[8px] gap-[3px] xl:gap-[8px] flex justify-center items-center '>
          <input
            type={type}
            id={name}
            name={name}
            className='  pl-[10px] font-dana font-medium text-[11px] xl:text-[13px] text-[#757575] focus:outline-none border-none w-[inherit] text-right'
            placeholder={placeholder}
            {...other}
          />
          <Image src={icon} alt='' className='size-[21px] xl:size-[24px] ' />
        </div>
        <span className='text-red-600 font-dana font-medium text-[11px] xl:text-[13px]'>
          {error && error[0] !== '' && error[0]}
        </span>
      </div>
    </div>
  )
}

export default Input
