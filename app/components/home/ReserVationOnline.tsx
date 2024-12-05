import Image from 'next/image'
import HoorsunText from '@/public/icon/HorsunText.svg'
import Logo from '@/public/icon/Logo.svg'
import img from '@/public/images/reservationAside.png'
const ReserVationOnline = () => {
  return (
    <section className='w-full max-w-[1245px] h-[505px] rounded-[60px] gap-[60px] bg-white flex justify-center items-center shadow-[5.85px_29.18px_41.09px_0px_#E5E5E566] mx-auto relative '>
      <div className='w-[681px] h-[427px] gap-[33px] flex flex-col justify-start items-end'>
        <div className='w-[681px] h-[337px] gap-[19px] flex flex-col justify-start items-end '>
          {/* logo */}
          <div className='w-[167px] h-[57px] rounded-[15px] gap-[10px] bg-white flex justify-center items-center shadow-[5.85px_29.18px_41.09px_0px_#E5E5E566]'>
            <div className='w-[119px] h-[33px] gap-[11px] flex justify-center items-center '>
              <div className='w-[79px] h-[33px] flex flex-col '>
                <Image
                  src={HoorsunText}
                  alt=''
                  className='w-[69px] h-[22px] '
                />
                <p className='font-satoshi font-medium text-[8px] text-[#121212]'>
                  HORSUN FAST FOOD
                </p>
              </div>
              <Image src={Logo} alt='' className='w-[29px] h-[26px]' />
            </div>
          </div>
          <h2 className='w-[513px] font-vazir font-bold text-[45px] text-right text-[#121212]'>
            سفارش انلاین غذا در منزل
            <span className='text-[29px] font-dana font-semibold  '>
              {' '}
              همین الان غذاتو سفارش بده
            </span>
          </h2>
          <p className='w-full font-dana font-medium text-[15px] text-[#121212] text-right '>
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
        <div className='w-[341px] h-[57px] flex justify-end items-end gap-[24px] '>
          <button className=' h-full rounded-[16px] border py-[17px] px-[35px] flex justify-center items-center border-[#dadada] font-dana font-semibold text-[16px] text-[#2e2e2e] hover:brightness-150 duration-300 ease-linear ' >
            تماس تلفنی
          </button>
         
          <button className='bg-[#D51F26] w-[166px] h-full rounded-[16px]  py-[17px] px-[36px] flex justify-center items-center  font-dana font-semibold text-white  overflow-hidden relative  hover:brightness-150  active:opacity-75 outline-none duration-300 group'>
            <span className='bg-white shadow-red-400 absolute -top-[150%] left-0 inline-flex w-[166px] h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]'></span>
            رزرو انلاین غذا
          </button>
        </div>
      </div>
      <aside className='w-[409px] h-[410px] '>
        <Image src={img} alt='reservationAside Image' className='' />
      </aside>
    </section>
  )
}

export default ReserVationOnline
