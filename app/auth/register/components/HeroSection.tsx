import Image from 'next/image'
import React from 'react'
import HeroSectionImg from '@/public/icon/HeroSection.svg'
import HorsunText from '@/public/icon/HorsunText.svg'
import Logo from '@/public/icon/Logo.svg'
const HeroSection = () => {
  return (
    <div className='flex flex-col justify-center items-center w-[481px] h-[696px] gap-[28px] select-none '>
      <Image src={HeroSectionImg} alt='HeroSection image' draggable={false} />
      <div className='w-[408px] h-[167px] mx-auto flex flex-col justify-center items-center gap-[39px]'>
        {/* logo */}
        <div className='w-[196px] h-[55px] flex  justify-center items-center gap-[18px]'>
          <div className='w-[133px] h-[55px] flex flex-col justify-center items-center '>
            <Image src={HorsunText} alt='' className='w-[115px] h-[36px] ' />
            <span className='w-[133px] font-satoshi text-[13px] font-medium text-[#121212]'>
              HORSUN FAST FOOD
            </span>
          </div>
          <Image src={Logo} alt='' className='w-[48px] h-[45px]' />
        </div>
        <div className="w-[408px] text-center">
        <span className='text-[28px] font-vazir text-center font-bold leading-[32px] text-[#D51F26]'>
        طعم لذت بخش غذا 
        </span>
        <span className='text-[28px] font-dana text-center font-bold leading-[32px]'>
        با بهترین کیفیت  {' '}
        </span>
        <span className='font-normal text-[27px] text-center leading-[32px] font-satoshi'>
        شامل تازه ترین مواد اولیه
        </span>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
