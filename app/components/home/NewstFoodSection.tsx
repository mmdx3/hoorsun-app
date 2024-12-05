import Image from 'next/image'
import Bg from '@/public/images/NewstSection.png'
import Vector190 from '@/public/icon/vector190.svg'
import FoodList from '../ui/FoodList'

const NewstFoodSection = () => {
  return (
    <div className='w-full min-h-[610px] gap-[43px] bg-[#202020] flex flex-col items-center justify-center relative  mt-4 '>
      <Image
        src={Bg}
        alt=''
        className='w-full h-full absolute top-0 left-0 object-cover opacity-[5%] z-[1]'
      />
      <div className='max-w-[1267px] w-full mx-auto  flex justify-between items-center relative z-10 mt-5 '>
        <div className='w-full h-[40px] flex justify-between items-center z-10 static'>
          <button className='w-[135px] h-full rounded p-2  bg-[#3E1213] flex justify-center items-center '>
            <Image src={Vector190} alt='vector190' />
            <p className='text-[#D51F26] font-dana font-semibold text-[15px]  ml-2'>
              مشاهده همه
            </p>
          </button>
          <h3 className='font-bold font-danafanum text-[30px] leading-[39px] text-black '>
            جدیدترین <span className='text-white font-vazir'>غذا ها</span>
          </h3>
        </div>
        <div className='w-[130px] h-[42px] rounded-[8px] rotate-[-6deg] bg-[#F6B529] z-0 absolute top-[0] right-0'></div>
      </div>
      {/* Foods list */}
      <FoodList IsnewstFood/>
    </div>
  )
}

export default NewstFoodSection
