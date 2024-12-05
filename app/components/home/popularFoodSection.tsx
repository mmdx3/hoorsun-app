import Image from 'next/image'
import Vector190 from '@/public/icon/vector190.svg'
import FoodList from '../ui/FoodList'

const PopularFoodSection = () => {
  return (
    <div className='w-full mt-4 h-[562px] gap-[43px] flex flex-col items-center justify-center container mx-auto'>
      <div className='max-w-[1267px] w-full mx-auto  flex justify-between items-center relative z-10 '>
        <div className='w-full h-[40px] flex justify-between items-center z-10 static'>
          <button className='w-[135px] h-full rounded p-2  bg-[#D51F261A] flex justify-center items-center '>
            <Image src={Vector190} alt='vector190' />
            <p className='text-[#D51F26] font-dana font-semibold text-[15px]  ml-2'>
              مشاهده همه
            </p>
          </button>
          <h3 className='font-bold font-danafanum text-[30px] leading-[39px] text-white '>
            محبوب ترین <span className='text-black font-vazir'>غذا ها</span>
          </h3>
        </div>
        <div className='w-[156px] h-[42px] rounded-[8px] rotate-[-6deg] bg-[#D51F26] z-0 absolute top-[0] right-0'></div>
      </div>
      {/* Foods list */}
      <FoodList />
    </div>
  )
}

export default PopularFoodSection
