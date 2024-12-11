import Image from 'next/image'
import HeroSectionImg from '@/public/images/HeroSectionHome.png'
import Calling from '@/public/icon/Calling.svg'
import Button from '../ui/Button'
const HeroSection = () => {
  return (
    <div className='w-full 2xl:h-[510px] lg:py-[34px] lg:gap-[11px] flex flex-col md:flex-row items-center  lg:justify-center  '>
      <div className='md:w-[571px] md:h-[501px] w-[271px] h-[261px] max-lg:ml-[30px]'>
        <Image src={HeroSectionImg} alt='' className='' draggable={false} />
      </div>
      <div className='w-[350px] lg:w-[743px]  flex flex-col gap-[30px] lg:gap-[40px] justify-start items-center lg:items-end '>
        <div className='w-full  gap-[16px] lg:gap-[26px] flex flex-col justify-start items-center lg:items-end'>
          <h1 className='2xl:text-[50px] lg:text-[46px] text-[19px] font-satoshi font-normal text-[#0D0D0D] leading-[34px] lg:leading-[60px] text-center lg:text-right'>
            <span className='font-vazir font-bold 2xl:text-[50px] lg:text-[46px] text-[26px] text-right text-[#D51F26]'>
              طعم لذت بخش غذا{' '}
            </span>
            <span className='font-dana font-bold 2xl:text-[50px] lg:text-[46px] text-[26px] text-right text-black'>
              با بهترین کیفیت{' '}
            </span>{' '}
            شامل تازه ترین مواد اولیه
          </h1>
          <p className='w-[350px] lg:w-[681px] lg:h-[84px] font-dana  text-[#121212] text-right text-[10px] max-lg:line-clamp-3 max-lg:dir-rtl'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز{' '}
          </p>
        </div>
        <div className='w-[303px] lg:w-[388px] h-[47px] lg:h-[58px] gap-[18px] lg:gap-[23px] flex justify-center items-center'>
          <button className='w-[167px] lg:w-[214px] h-full bg-[#F6B529] rounded-[13px] lg:rounded-[16px] py-[14px] lg:py-[17px] px-[29px] lg:px-[36px]  text-white font-dana text-[20px] flex gap-[2px] active:scale-[.85] transition-all overflow-hidden relative  hover:bg-[#f5c45a] active:opacity-75 outline-none duration-300 group '>
            <span className='bg-white shadow-[#F6B529] absolute -top-[150%] left-0 inline-flex w-full h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]'></span>
            <span className='font-dana font-semibold text-[12px] lg:text-[16px] text-[#3b3b3b] '>
              تماس با هورسان
            </span>
            <Image
              src={Calling}
              alt=''
              className='lg:size-[24px] size-[19px]'
            />
          </button>
          <Button text='مشاهده منو' />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
