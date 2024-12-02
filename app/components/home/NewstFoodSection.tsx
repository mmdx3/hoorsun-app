import Image from 'next/image'
import Bg from '@/public/images/NewstSection.png'
import Vector190 from '@/public/icon/vector190.svg'
import Star from '@/public/icon/Star.svg'
import FoodImg from '@/public/images/FoodBgBlack.png'
import ClockCircle from '@/public/icon/ClockCircle.svg'
import Add from '@/public/icon/plus.svg'
import LikeIcon from '@/public/icon/LikeIcon'

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
      <div className='max-w-[1267px] w-full mx-auto  flex justify-center items-center gap-[32px] overflow-hidden flex-wrap py-3 z-10'>
        {[0, 1, 2, 3, 4].map((i, j) => (
          <div
            key={j}
            className='w-[227px] h-[416px] rounded-[35px]  gap-[10px] flex flex-col justify-center items-center bg-[#1E1E1E]  shadow-[rgba(0,0,0,0.15)_2.4px_2.4px_3.2px] relative'
          >
            <div className='w-[203px] h-[359px] gap-[9px] flex flex-col justify-start items-end '>
              <div className='w-full gap-[4px] flex flex-col justify-start items-end'>
                <Image
                  src={FoodImg}
                  alt=''
                  className='w-full h-[203px] object-cover '
                  draggable={false}
                />
                {/* about */}
                <div className='w-[182px] gap-[13px] flex flex-col justify-start items-end mx-auto '>
                  {/* label */}
                  <div className='w-[86px] h-[30px] rounded-[4.5px] bg-[#3A3119] text-center flex justify-center items-center'>
                    <p className='font-dana font-semibold text-[10px] leading-[16px] text-[#DAA31A]'>
                      محبوب ترین ها
                    </p>
                  </div>
                  <div className='w-full gap-[7px] flex flex-col justify-start items-end'>
                    <p className='font-semibold text-[22px] leading-[28px] text-right text-[#DCDCDC]'>
                      پیتزا مخصوص
                    </p>
                    <div className='w-[154px] gap-[9px] flex justify-center items-end '>
                      {/* rating */}
                      <div className='gap-[5px] flex justify-center items-center '>
                        <span className='font-danafanum font-normal text-[14px] text-[#C1C1C1] '>
                          4.8
                        </span>
                        <Image src={Star} alt='' className='' />
                      </div>
                      <div className='w-[5px] h-[20px] font-dana font-semibold text-[12px] text-[#C1C1C1]'>
                        .
                      </div>
                      {/* time */}
                      <div className='gap-[7px] flex justify-center items-center '>
                        <p className='font-dana font-semibold text-[12px] text-[#C1C1C1] '>
                          25 دقیقه
                        </p>
                        <Image
                          src={ClockCircle}
                          alt=''
                          className='text-white'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-[181px] mx-auto h-[40px] flex justify-between items-center '>
                {/* add btn */}
                <div className='w-[44px] h-[40px] rounded-[9px] flex justify-center items-center  bg-[#F6B529] cursor-pointer active:scale-[0.8] transition-all duration-300 ease-linear '>
                  <Image src={Add} alt='' className='' />
                </div>
                <div className='gap-[6px] flex justify-center items-center '>
                  <p className='font-danafanum  font-semibold text-[10px] text-[#FFFFFF] '>
                    تومان
                  </p>
                  <p className='font-danafanum  font-semibold text-[20px] text-[#FFFFFF] '>
                    155
                  </p>
                </div>
              </div>
            </div>
            {/* Like Icon */}
            <div className='absolute top-[25px] right-[20px] cursor-pointer '>
              <LikeIcon isBlack />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewstFoodSection
