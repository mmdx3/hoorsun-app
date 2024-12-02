import Image from 'next/image'
import HeroSectionImg from '@/public/images/HeroSectionHome.png'
import Calling from '@/public/icon/Calling.svg'
const HeroSection = () => {
  return (
    <div className='w-full 2xl:h-[510px] lg:py-[34px] gap-[11px] flex flex-col md:flex-row items-center  lg:justify-center'>
      <div className='w-[571px] h-[501px] '>
        <Image src={HeroSectionImg} alt='' className='' draggable={false} />
      </div>
      <div className='w-[743px]  flex flex-col gap-[40px] justify-start items-end '>
        <div className='w-full  gap-[26px] flex flex-col justify-start items-end'>
          <h1 className='2xl:text-[50px] lg:text-[46px] font-satoshi font-normal text-[#0D0D0D] leading-[60px] text-right'>
            <span className='font-vazir font-bold 2xl:text-[50px] lg:text-[46px] text-right text-[#D51F26]'>
              طعم لذت بخش غذا{' '}
            </span>
            <span className='font-dana font-bold 2xl:text-[50px] lg:text-[46px] text-right text-black'>
              با بهترین کیفیت{' '}
            </span>{' '}
            شامل تازه ترین مواد اولیه
          </h1>
          <p className='w-[681px] h-[84px] font-dana text-[15px] text-[#121212] text-right'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز{' '}
          </p>
        </div>
        <div className='w-[388px] h-[58px] gap-[23px] flex justify-center items-center'>
          <button className='w-[214px] h-[58px] bg-[#F6B529] rounded-[16px] py-[17px] px-[36px]  text-white font-dana text-[20px] flex gap-[2px] active:scale-[.85] transition-all duration-300 ease-linear '>
            <span className='font-dana font-semibold text-[16px] text-[#3b3b3b] '>
              تماس با هورسان
            </span>
            <Image src={Calling} alt='' className='size-[24px]' />
            
          </button>
          <button className='w-[151px] h-[57px] bg-[#D51F26] rounded-[16px] py-[17px] px-[36px] text-white font-dana  active:scale-[.85] transition-all duration-300 ease-linear'>
            مشاهده منو
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
