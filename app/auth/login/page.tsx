'use client'
import Image from 'next/image'
import BgDesktop from '@/public/images/register&loginBg.png'
import BgMobile from '@/public/images/registerMobileBg.png'
import Hidden from '@/app/components/ui/Hidden'
import HorsunText from '@/public/icon/HorsunText.svg'
import LogoImg from '@/public/icon/Logo.svg'
import HeroSection from './components/HeroSection'
import { useState } from 'react'
import LoginForm from './components/LoginForm'
import OtpVerification from '@/app/components/ui/OtpVerification'

const page = () => {
  const [step, setStep] = useState(1)

  return (
    <div className='w-full h-screen relative z-10 '>
      <Image
        src={BgMobile}
        alt='Mobile Background'
        fill
        className='absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity-[0.3] md:hidden'
      />

      {/* تصویر دسکتاپ */}
      <Image
        src={BgDesktop}
        alt='Desktop Background'
        fill
        className='absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity-[0.3] hidden md:block'
      />
      <div className='container mx-auto flex md:flex-row flex-col justify-center max-xl:gap-[54px] xl:justify-between items-center h-full xl:pt-[133px] xl:pb-[195px]'>
        <Hidden mdDown>
          <HeroSection />
        </Hidden>
        <Hidden mdUp>
          {/* logo */}
          <div
            className={`w-[110px] h-[30px] flex  justify-center items-center gap-[10px]`}
          >
            <div
              className={`w-[73px] h-[30px] flex flex-col justify-center items-center`}
            >
              <Image src={HorsunText} alt='' className={`w-[64px] h-[20px]`} />
              <span
                className={`w-[73px] font-satoshi text-[7px] font-medium text-[#121212]`}
              >
                HORSUN FAST FOOD
              </span>
            </div>
            <Image src={LogoImg} alt='' className={`w-[27px] h-[25px]`} />
          </div>
        </Hidden>
        {step === 1 ? <LoginForm setStep={setStep} /> : <OtpVerification setStep={setStep} btnlabel='ورود'/>}
      </div>
    </div>
  )
}

export default page
