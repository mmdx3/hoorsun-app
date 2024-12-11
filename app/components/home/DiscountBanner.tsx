import bg from '@/public/images/SocialMediaBg.png'
import img from '@/public/images/DiscountbannerImg.png'
import Image from 'next/image'
const DiscountBanner = () => {
  return (
    <section className='relative w-full max-w-[344px] max-lg:container lg:max-w-[1248px] h-[171px] lg:h-[289px] rounded-[17px] lg:rounded-[60px]  lg:pr-[75px] gap-[10px] lg:gap-[33px] flex flex-col justify-center lg:items-end items-center  bg-[#111111] z-10 max-lg:mt-7'>
      <Image
        src={bg}
        alt='bg'
        className='absolute top-0 left-0 w-full h-full object-cover  rounded-[17px] lg:rounded-[60px] z-0 opacity-[75%]'
      />
      <div className='w-[300px] lg:w-[401px] lg:h-[90px] gap-[14px] lg:gap-[10px] flex flex-col justify-start items-end'>
        <h4 className='font-dana font-bold text-[15px] lg:text-[42px] lg:leading-[54px] text-right text-[#E6E6E6] dir-rtl'>
          50 درصد تخفیف
        </h4>
        <p className='font-dana max-lg:w-[181px] font-normal text-[12.5px] lg:text-[18px] leading-[24px] text-right text-[#B4B4B4] dir-rtl'>
          با وارد کردن ایمیل کد تخفیف 50 درصدی دریافت کنید.
        </p>
      </div>
      <div className='w-[300px] lg:w-[358px] lg:h-[49px] gap-[10px] lg:gap-[11px] flex justify-center items-center relative z-20 '>
        <div className='w-full h-full rounded-[13px] lg:rounded-[16px] border border-[#414141] p-[6px] lg:p-2 flex justify-center items-center'>
          <button className='w-[94px] lg:w-[112px] h-[34px] lg:h-[41px] rounded-[10px] lg:rounded-[12px] py-[11px] lg:py-[13px]  hover:brightness-150  bg-[#D51F26] font-semibold text-[10px] lg:text-[12px] text-[#ffffff]'>
            ثبت ایمیل
          </button>
          <input
            type='text'
            className='w-[inherit] h-full outline-none border-none bg-transparent  font-dana font-normal text-[10px] lg:text-[13px] leading-[16px] text-[#ACACAC] text-right'
            placeholder='ایمیل خود را وارد نمایید'
          />
        </div>
      </div>
      <Image
        src={img}
        alt='img'
        className='absolute top-[-20px] lg:top-[-55px] left-[27px] lg:left-[146px] size-[110px] lg:size-[363px] object-cover '
      />
    </section>
  )
}

export default DiscountBanner
