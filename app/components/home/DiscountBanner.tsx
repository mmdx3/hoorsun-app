import bg from '@/public/images/SocialMediaBg.png'
import img from '@/public/images/DiscountbannerImg.png'
import Image from 'next/image'
const DiscountBanner = () => {
  return (
    <section className='relative w-full  max-w-[1248px] h-[289px] rounded-[60px] pr-[75px] gap-[33px] flex flex-col justify-center items-end bg-[#111111] z-10'>
      <Image
        src={bg}
        alt='bg'
        className='absolute top-0 left-0 w-full h-full object-cover rounded-[60px] z-0 opacity-[75%]'
      />
      <div className='w-[401px] h-[90px] gap-[10px] flex flex-col justify-center items-end'>
        <h4 className='font-dana font-bold text-[42px] leading-[54px] text-right text-[#E6E6E6] dir-rtl'>
          50 درصد تخفیف
        </h4>
        <p className='font-dana font-normal text-[18px] leading-[24px] text-right text-[#B4B4B4] dir-rtl'>
          با وارد کردن ایمیل کد تخفیف 50 درصدی دریافت کنید.
        </p>
      </div>
      <div className='w-[358px] h-[49px] gap-[11px] flex justify-center items-center relative z-20 '>
        <div className='w-full h-full rounded-[16px] border border-[#414141] p-2 flex justify-center items-center'>
          <button className='w-[112px] h-[41px] rounded-[12px] py-[13px] hover:brightness-150  bg-[#D51F26] font-semibold text-[12px] text-[#ffffff]'>
            ثبت ایمیل
          </button>
          <input
            type='text'
            className='w-[inherit] h-full outline-none border-none bg-transparent  font-dana font-normal text-[13px] leading-[16px] text-[#ACACAC] text-right'
            placeholder='ایمیل خود را وارد نمایید'
          />
        </div>
      </div>
      <Image
        src={img}
        alt='img'
        className='absolute top-[-55px] left-[146px] size-[363px] object-cover '
      />
    </section>
  )
}

export default DiscountBanner
