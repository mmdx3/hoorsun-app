import Image from 'next/image'
import Bg from '@/public/images/NewstSection.png'
import MobileBg from '@/public/images/mobileNewsBg.png'
import Vector190 from '@/public/icon/vector190.svg'
import FoodList from '../ui/FoodList'

const NewstFoodSection = () => {
  return (
    <div className='w-full min-h-[610px] gap-[43px] bg-[#202020] flex flex-col items-center justify-center relative  mt-4 '>
      <Image
        src={Bg}
        alt=''
        className='w-full h-full absolute top-0 left-0 object-cover opacity-[5%] z-[1] '
      />

      <div className='lg:max-w-[1267px] container  w-full mx-auto  flex justify-between items-center relative z-10 mt-5 '>
        <div className='w-full h-[27px] lg:h-[40px] flex justify-between items-center z-10 static max-lg:px-2'>
          <button className='w-[93px] lg:w-[135px] h-full rounded-[2px] lg:rounded p-[5px] lg:p-2   flex justify-center items-center  bg-[#3E1213]  '>
            <Image src={Vector190} alt='vector190' className='max-md:w-[16px] max-md:h-[14px]'/>
            <p className='text-[#D51F26] font-dana font-semibold text-[10px] lg:text-[15px]  ml-[5px] lg:ml-2'>
              مشاهده همه
            </p>
          </button>
          <h3 className='font-bold font-danafanum text-[18px] lg:text-[30px] leading-[23px] lg:leading-[39px] text-black '>
            جدیدترین <span className='text-white font-vazir'>غذا ها</span>
          </h3>
        </div>
        <div className='w-[78px] lg:w-[130px] h-[30px] lg:h-[42px] rounded-[8px] rotate-[-6deg] bg-[#F6B529] z-0 absolute top-[0] right-[6px] lg:right-0'></div>
      </div>
      {/* Foods list */}
      <div className="lg:max-w-[1267px] lg:h-[478px] container  w-full mx-auto">
      <FoodList IsnewstFood />
      </div>
    </div>
  )
}

export default NewstFoodSection
