import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import LeftArrow from '@/public/icon/directionleftArrow.svg'
const BreadCrumb = (props: { text: string; link: string }) => {
  const { text, link } = props
  return (
    <div className='h-[20px] flex items-end justify-end gap-[5px] lg:gap-[6px] container mx-auto max-lg:max-w-[354px]'>
      <Link href={link} className='text-[12px] text-[#111111]'>
        {text}
      </Link>
      <div className="h-[20px] gap-[5px] lg:gap-[6px] flex justify-center items-center ">
         <Image src={LeftArrow} alt='' className='size-[17px] lg:size-[20px] '/>
         <Link href={'/'}>
         <p className='font-medium text-[12px] text-[#545454]'>هورسان</p>
         </Link>
      </div>
    </div>
  )
}

export default BreadCrumb
