import Bg from '@/public/images/Bg.png'
import Image from 'next/image'
import Hoorsuntext from '@/public/icon/HorsunText.svg'
import logo from '@/public/icon/Logo.svg'
import img from '@/public/images/bannerImg.png'
const Banner = () => {
  return (
    <div className='w-[357px] h-[171px] rounded-[16px] pr-[29px] gap-[17px]  lg:w-[873px] lg:h-[300px]  lg:pr-[75px] lg:gap-[33px] flex flex-col justify-center  items-end  bg-[#111111] relative'>
      <Image
        src={Bg}
        alt=''
        className='w-full h-full object-cover absolute top-0 left-0 z-0  opacity-[73%]'
      />
      <div className='w-[165px] lg:w-[482px]  gap-[17px] flex flex-col justify-center items-end static z-10'>
        {/* logo */}
        <div className='w-[130px] h-[44px] rounded-[16px] gap-[7px] bg-white shadow-[4.59px_22.88px_32.22px_0px_#6C6C6C17] flex justify-center items-center max-lg:hidden'>
          <div className='w-[93px] h-[25px] gap-[8px] flex justify-center items-center '>
            <div className='w-[62px] h-[25px] flex flex-col justify-center items-center'>
              <Image src={Hoorsuntext} alt='' className='w-[54px] h-[17px] ' />
              <p className='font-satoshi font-medium text-[6px] text-[#121212]'>
                HORSUN FAST FOOD
              </p>
            </div>
            <Image src={logo} alt='' className='size-[22px]' />
          </div>
        </div>
        <h1 className='font-bold text-[33px] text-[#E6E6E6] dir-rtl max-lg:hidden'>
          50 درصد تخفیف برای ویژه هورسان
        </h1>
        <h3 className='text-[15px] font-bold text-[#ffffff] dir-rtl lg:hidden block '>
          50 درصد تخفیف
        </h3>
        <p className='font-dana font-medium text-[12px] lg:text-[18px] text-[#B4B4B4] text-right'>
          با وارد کردن ایمیل کد تخفیف 50 درصدی دریافت کنید.
        </p>
      </div>
      <button className=' h-[57px] rounded-2xl py-[12px] lg:py-[17px] px-[26px] lg:px-[36px] bg-[#D51F26] hover:bg-[#e24b50] transition-all duration-300 ease-linear flex justify-center items-center font-dana font-semibold text-[16px] text-[#FFFFFF] static z-10 '>
        رزرو انلاین
      </button>

      <Image
        src={img}
        alt=''
        className='w-[149px] lg:w-[236px] h-[158px] lg:h-[278px] object-cover absolute left-[12px] lg:left-[44px] top-[7px] lg:top-[8px]'
      />
    </div>
  )
}

export default Banner
