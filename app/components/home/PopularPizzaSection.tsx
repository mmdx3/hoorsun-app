import Image from 'next/image'
import Vector190 from '@/public/icon/vector190.svg'
import PizzaImg from '@/public/images/Pizzaicon.png'
import FoodList from '../ui/FoodList'
const PopularPizzaSection = () => {
  return (
    <div className='w-full mt-4 lg:h-[562px] gap-[23px] lg:gap-[43px] flex flex-col items-center justify-center container mx-auto'>
      <div className='lg:max-w-[1267px] w-full mx-auto  flex justify-between items-center relative z-10 '>
        <div className='w-full h-[27px] lg:h-[40px] flex justify-between items-center z-10 static max-lg:px-2'>
          <button className='w-[93px] lg:w-[135px] h-full rounded-[2px] lg:rounded p-[5px] lg:p-2  bg-[#D51F261A] flex justify-center items-center '>
            <Image
              src={Vector190}
              alt='vector190'
              className='max-md:w-[16px] max-md:h-[14px]'
            />
            <p className='text-[#D51F26] font-dana font-semibold text-[10px] lg:text-[15px]  ml-[5px] lg:ml-2'>
              مشاهده همه
            </p>
          </button>
          <h3 className='font-bold font-danafanum text-[18px] lg:text-[30px] leading-[23px] lg:leading-[39px] text-black  '>
            محبوب ترین <span className='text-white font-vazir'> پیتزا ها</span>
          </h3>
        </div>
        <div className='w-[92px]  lg:w-[138px] h-[30px] lg:h-[42px] rounded-[6px] lg:rounded-[8px] rotate-[-6deg] bg-[#D51F26] z-0 absolute top-[0] right-[100px] lg:right-[153px]'></div>
        <Image
          src={PizzaImg}
          alt=''
          className='w-[48px] lg:w-[58px]  h-[31px] lg:h-[39px] object-cover absolute right-[159px]  lg:right-[251px] top-0'
        />
      </div>
      {/* Foods list */}
      <FoodList />
    </div>
  )
}

export default PopularPizzaSection
