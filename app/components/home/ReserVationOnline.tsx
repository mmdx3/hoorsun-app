import Image from 'next/image'
import HoorsunText from '@/public/icon/HorsunText.svg'
import Logo from '@/public/icon/Logo.svg'
import img from '@/public/images/reservationAside.png'
const ReserVationOnline = () => {
  return (
    <section className='w-full lg:max-w-[1245px] max-w-[368px] max-lg:py-4 max-lg:container lg:h-[505px] max-lg:px-5 rounded-[18px] lg:rounded-[60px] gap-[16px] lg:gap-[60px] bg-white flex lg:flex-row flex-col-reverse   justify-center items-center shadow-[5.85px_29.18px_41.09px_0px_#E5E5E566] mx-auto relative '>
      <div className='w-full px-[25px] lg:w-[681px] lg:h-[427px] gap-[24px] lg:gap-[33px] flex flex-col justify-start items-end'>
        <div className='w-full lg:w-[681px] lg:h-[337px] gap-[14px] lg:gap-[19px] flex flex-col justify-start items-end '>
          {/* logo */}
          <div className='w-[123px] lg:w-[167px] h-[41px] lg:h-[57px] rounded-[15px] gap-[7px] lg:gap-[10px] bg-white flex justify-center items-center shadow-[5.85px_29.18px_41.09px_0px_#E5E5E566]'>
            <div className='w-[87px] lg:w-[119px] h-[24px] lg:h-[33px] gap-[8px] lg:gap-[11px] flex justify-center items-center '>
              <div className='w-[58px] lg:w-[79px] h-full flex flex-col '>
                <Image
                  src={HoorsunText}
                  alt=''
                  className='w-[51px] lg:w-[69px] h-[16px] lg:h-[22px] '
                />
                <p className='font-satoshi font-medium text-[5.87px] lg:text-[8px] text-[#121212]'>
                  HORSUN FAST FOOD
                </p>
              </div>
              <Image
                src={Logo}
                alt=''
                className='w-[21px] lg:w-[29px] h-[19px] lg:h-[26px]'
              />
            </div>
          </div>
          <h2 className='w-[310px] lg:w-[513px] font-vazir font-bold text-[29px] lg:text-[45px] text-right text-[#121212]'>
            سفارش انلاین غذا در منزل
            <span className='text-[21px] lg:text-[29px] font-dana font-semibold  '>
              {' '}
              همین الان غذاتو سفارش بده
            </span>
          </h2>
          <p className='w-full font-dana font-medium text-[9.92px] max-lg:line-clamp-3 max-lg:dir-rtl lg:text-[15px] text-[#121212] text-right '>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز{' '}
          </p>
        </div>
        <div className='w-[250px] lg:w-[341px] h-[43px] lg:h-[57px] flex justify-end items-end gap-[17px] lg:gap-[24px] '>
          <button className=' h-full rounded-[16px] border py-[13px] lg:py-[17px] px-[29px] lg:px-[35px] flex justify-center items-center border-[#dadada] font-dana font-semibold text-[10px] lg:text-[16px] text-[#2e2e2e] hover:brightness-150 duration-300 ease-linear '>
            تماس تلفنی
          </button>

          <button className='bg-[#D51F26] w-[122px] lg:w-[166px] h-full rounded-[12px] lg:rounded-[16px]  py-[13px] lg:py-[17px] px-[29px] lg:px-[36px] flex justify-center items-center  font-dana font-semibold max-lg:text-[10px] text-white  overflow-hidden relative  hover:brightness-150  active:opacity-75 outline-none duration-300 group'>
            <span className='bg-white shadow-red-400 absolute -top-[150%] left-0 inline-flex w-[166px] h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]'></span>
            رزرو انلاین غذا
          </button>
        </div>
      </div>
      <aside className='size-[257px] lg:w-[409px] lg:h-[410px] '>
        <Image src={img} alt='reservationAside Image' className='' />
      </aside>
    </section>
  )
}

export default ReserVationOnline
