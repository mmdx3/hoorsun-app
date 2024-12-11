import Image from 'next/image'
import Star from '@/public/icon/Star.svg'
import FoodImg from '@/public/images/foodimg.jpeg'
import NewsFoodImg from '@/public/images/FoodBgBlack.png'
import ClockCircle from '@/public/icon/ClockCircle.svg'
import Add from '@/public/icon/plus.svg'
import LikeIcon from '@/public/icon/LikeIcon'

interface IProps {
  IsnewstFood?: boolean
}

const FoodList = ({ IsnewstFood }: IProps) => {
  return (
    <div className=' lg:max-w-[1267px] lg:h-[446px]  max-lg:container  w-full mx-auto  flex justify-center items-center gap-[15px] lg:gap-[32px] overflow-hidden flex-wrap py-3 select-none '>
      {[0, 1, 2, 3, 4, 5].map((i, j) => (
        <div
          key={j}
          className={`w-[176px]  lg:w-[227px] h-[323px] lg:h-[416px] rounded-[26px] lg:rounded-[35px]  gap-[7px] lg:gap-[10px] flex flex-col justify-center items-center ${
            IsnewstFood ? 'bg-[#1e1e1e]' : 'bg-white border-[#F4F4F6] border'
          }
         shadow-[rgba(0,0,0,0.15)_2.4px_2.4px_3.2px] relative z-10`}
        >
          <div className='w-[157px] lg:w-[203px] h-[279px] lg:h-[359px] gap-[7px] lg:gap-[9px] flex flex-col justify-start items-end '>
            <div className='w-full gap-[3px] lg:gap-[4px] flex flex-col justify-start items-end'>
              {IsnewstFood ? (
                <Image
                  src={NewsFoodImg}
                  alt=''
                  className='w-full h-[157px] lg:h-[203px] object-cover '
                  draggable={false}
                />
              ) : (
                <Image
                  src={FoodImg}
                  alt=''
                  className='w-full h-[157px] lg:h-[203px] object-cover '
                  draggable={false}
                />
              )}
              {/* about */}
              <div className='w-[141px] lg:w-[182px] gap-[10px] lg:gap-[13px] flex flex-col justify-start items-end mx-auto '>
                {/* label */}
                <div
                  className={`w-[67px] lg:w-[86px] h-[27px] lg:h-[30px] rounded-[3.5px] lg:rounded-[4.5px] ${
                    IsnewstFood ? 'bg-[#3A3119]' : 'bg-[#F7EDD0]'
                  } text-center flex justify-center items-center`}
                >
                  <p
                    className={
                      'font-dana font-semibold text-[8px] lg:text-[10px] leading-[12px] lg:leading-[16px] text-[#DAA31A]'
                    }
                  >
                    محبوب ترین ها
                  </p>
                </div>
                <div className='w-full gap-[5.56px] lg:gap-[7px] flex flex-col justify-start items-end'>
                  <p
                    className={`font-semibold text-[17px] lg:text-[22px] leading-[21px] lg:leading-[28px] text-right ${
                      IsnewstFood ? 'text-[#DCDCDC]' : ' text-[#121212]'
                    }`}
                  >
                    پیتزا مخصوص
                  </p>
                  <div className='w-[120px] lg:w-[154px] gap-[7px] lg:gap-[9px] flex justify-center items-end '>
                    {/* rating */}
                    <div className='gap-[4px] lg:gap-[5px] flex justify-center items-end '>
                      <span
                        className={`font-danafanum font-normal text-[11px] lg:text-[14px]  max-lg:h-[14px] ${
                          IsnewstFood ? 'text-[#C1C1C1]' : 'text-[#313131]'
                        } `}
                      >
                        4.8
                      </span>
                      <Image src={Star} alt='' className='max-lg:size-[18px]' />
                    </div>
                    <div
                      className={`w-[4px] lg:w-[5px] h-[15px] lg:h-[20px] font-dana font-semibold text-[9.87px] lg:text-[12px] ${
                        IsnewstFood ? 'text-[#C1C1C1]' : 'text-[#313131]'
                      }`}
                    >
                      .
                    </div>
                    {/* time */}
                    <div className='gap-[5.56px] lg:gap-[7px] flex justify-center items-end '>
                      <p
                        className={`font-dana font-semibold text-[9.87px] lg:text-[12px] max-lg:h-[14px] ${
                          IsnewstFood ? 'text-[#C1C1C1]' : 'text-[#313131]'
                        }`}
                      >
                        25 دقیقه
                      </p>
                      <Image src={ClockCircle} alt='' className='max-lg:size-[16px]' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-[141px] lg:w-[181px] mx-auto h-[31px] lg:h-[40px] flex justify-between items-center '>
              {/* add btn */}
              <div
                className={`w-[34px] lg:w-[44px] h-[31px] lg:h-[40px] rounded-[7px] lg:rounded-[9px] flex justify-center items-center  ${
                  IsnewstFood ? 'bg-[#F6B529]' : 'bg-[#D51F26]'
                } cursor-pointer active:scale-[0.8] transition-all duration-300 ease-linear `}
              >
                <Image src={Add} alt='' className='' />
              </div>
              <div className='gap-[4.76px] lg:gap-[6px] flex justify-center items-center '>
                <p
                  className={`font-danafanum  font-semibold text-[8px] lg:text-[10px] ${
                    IsnewstFood ? 'text-[#FFFFFF]' : 'text-[#3D3D3D]'
                  }`}
                >
                  تومان
                </p>
                <p
                  className={`font-danafanum  font-semibold text-[16px] lg:text-[20px] ${
                    IsnewstFood ? 'text-[#FFFFFF]' : 'text-[#3D3D3D]'
                  }`}
                >
                  155
                </p>
              </div>
            </div>
          </div>
          <div className='absolute top-[25px] right-[20px] cursor-pointer '>
            {/* Like Icon */}
            <LikeIcon isBlack={IsnewstFood ? true : false} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default FoodList
