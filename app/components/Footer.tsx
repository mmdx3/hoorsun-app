import Image from 'next/image'
import bg from '@/public/images/footerBg.png'
import Hoorsuntext from '@/public/icon/text.svg'
import Logo from '@/public/icon/Logo.svg'
import MapLocation from '@/public/icon/mapLocationIcon.svg'
import Calling from '@/public/icon/RedCallingicon.svg'
import Mail from '@/public/icon/Mail.svg'
import FaceBookIcon from '@/public/icon/FaceBookIcon'
import Link from 'next/link'
import WatssappIcon from '@/public/icon/WatssappIcon'
import YouTubeIcon from '@/public/icon/YouTubeIcon'
import Instagramicon from '@/public/icon/Instagramicon'
const Footer = () => {
  return (
    <footer className='w-full h-[366px] flex flex-col justify-center items-center mt-16'>
      <div className='w-full h-[322px] gap-[79px] flex justify-center items-center bg-[#161616] relative z-10'>
        <Image
          src={bg}
          alt=''
          className='w-full h-full absolute top-0 left-0 z-0 opacity-[40%] object-cover '
        />
        <div className='w-[475px] h-[254px] gap-[40px] flex flex-col justify-center items-center relative z-10'>
          <div className='w-full h-[125px] gap-[25px] flex flex-col justify-center items-center '>
            <div className='w-full h-[27px] flex gap-[35px] justify-center items-center'>
              <p className='w-[332px] h-[19px] font-dana font-medium text-[13px] text-right text-[#d7d7d7] '>
                تهران , خیابان ستارخان , کوچه شقایق , ساختمان پونه , پلاک ۴۱۹
              </p>
              <p className='h-[19px]  font-bold text-[15px] text-right text-[#ADADAD] flex gap-[6px] '>
                : ادرس شرکت
                <Image
                  src={MapLocation}
                  alt=''
                  className='w-[15px] h-[19px] '
                />
              </p>
            </div>
            <div className='w-full h-[27px] flex gap-[35px] justify-between items-center'>
              <p className='w-[100px] h-[19px] font-dana font-medium text-[16px] text-left text-[#d7d7d7] '>
                +5143212410
              </p>
              <p className=' h-[19px]  font-bold text-[15px] text-right text-[#ADADAD] flex gap-[6px] '>
                : تلفن تماس
                <Image src={Calling} alt='' className='w-[15px] h-[19px] ' />
              </p>
            </div>
            <div className='w-full h-[27px] flex gap-[35px] justify-between items-center'>
              <p className=' h-[19px] font-dana font-medium text-[13px] text-left text-[#d7d7d7] '>
                Mamadx3j@gmail.com
              </p>
              <p className=' h-[19px]  font-bold text-[15px] text-right text-[#ADADAD] flex gap-[6px] '>
                : ایمیل
                <Image src={Mail} alt='' className='w-[15px] h-[19px] ' />
              </p>
            </div>
          </div>
          <div className='w-full h-[24px] justify-between items-center flex '>
            <div className='w-[186px] h-[24px] gap-[30px] flex justify-center items-center '>
              <Link
                href={'https://www.watssapp.com/+989354501795'}
                target='_blank'
              >
                <WatssappIcon w='20' h='20' color='#F6B529' />
              </Link>
              <Link href={'https://t.me/+989354501795'} target='_blank'>
                <FaceBookIcon w='20' h='20' color='#F6B529' />
              </Link>
              <Link href={'https://www.twitter.com/mmdx3'} target='_blank'>
                <YouTubeIcon w='20' h='20' color='#F6B529' />
              </Link>
              <Link
                href={'https://www.instagram.com/lifewith_mamad'}
                target='_blank'
              >
                <Instagramicon w='20' h='20' color='#F6B529' />
              </Link>
            </div>
            <p className='font-bold text-[17px] text-[#ffffff] '>
              شبکه های اجتماعی
            </p>
          </div>
        </div>
        {/* pages links */}
        <div className='w-[242px] h-[220px] gap-[73px] flex justify-between items-start relative z-10'>
          <div className='w-[92px] h-full gap-[16px] flex flex-col justify-center items-end '>
            <p className='font-semibold text-[14px] text-justify text-[#F6F6F6]'>
              اطلاعات
            </p>
            <p className='font-medium text-[12px] text-justify text-[#CECECE]'>
              سوالات متداول
            </p>
            <p className='font-semibold text-[12px] text-justify text-[#CECECE]'>
              ارتباط با ما
            </p>
            <p className='font-semibold text-[12px] text-justify text-[#CECECE]'>
              تماس با ما
            </p>
            <p className='font-semibold text-[12px] text-justify text-[#CECECE]'>
              قوانین و مقررات
            </p>
            <p className='font-semibold text-[12px] text-justify text-[#CECECE]'>
              مقالات
            </p>
          </div>
          <div className='w-[92px] h-full gap-[16px] flex flex-col justify-center items-end '>
            <p className='font-semibold text-[14px] text-justify text-[#F6F6F6]'>
              صفحات
            </p>
            <p className='font-medium text-[12px] text-justify text-[#CECECE]'>
              صفحات اصلی{' '}
            </p>
            <p className='font-semibold text-[12px] text-justify text-[#CECECE]'>
              رزرو غذا{' '}
            </p>
            <p className='font-semibold text-[12px] text-justify text-[#CECECE]'>
              منو{' '}
            </p>
            <p className='font-semibold text-[12px] text-justify text-[#CECECE]'>
              درباره ما{' '}
            </p>
            <p className='font-semibold text-[12px] text-justify text-[#CECECE]'>
              مقالات
            </p>
          </div>
        </div>
        <div className='w-[393px] h-[221px] gap-[14px] flex flex-col justify-center items-end relative z-10'>
          <div className='w-[311px] h-[91px] gap-[15px] flex flex-col justify-center items-end '>
            {/* logo */}
            <div className='w-[140px] h-[39px] flex justify-center items-center gap-[13px]'>
              <div className='w-[93px] h-full text-right  flex flex-col justify-center items-end'>
                <Image
                  src={Hoorsuntext}
                  alt=''
                  className='w-[82px] h-[26px] '
                />
                <p className='font-satoshi font-normal text-[9px] text-right text-[#C3C3C3]'>
                  HORSUN FAST FOOD
                </p>
              </div>
              <Image src={Logo} alt='' className='w-[34px] h-[31px]' />
            </div>
            <p className='w-full font-semibold text-[18px] text-right text-[#D0D0D0]'>
              طعم لذت لخش غذا با بهترین کیفیت
            </p>
          </div>
          <p className='w-full h-[68px] font-dana font-medium text-[12px]  text-[#C1C1C1] text-right'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است.لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است{' '}
          </p>
          <div className='w-[205px] h-[34px] gap-[14px] flex items-center justify-center'>
            <button className=' h-full rounded-[10px] py-[10px] px-[18px] gap-[6px] bg-[#F6B529] text-[10px]  text-white '>
              مشاهده منو
            </button>
            <button className=' h-full rounded-[10px] py-[10px] px-[18px] gap-[6px] bg-[#D51F26] text-[10px]  text-white '>
              رزرو انلاین غذا
            </button>
          </div>
        </div>
      </div>
      <div className='w-full h-[50px] flex justify-center items-center bg-[#161616]'>
        <div className=' h-[17px] gap-[34px] flex items-center justify-center'>
          <div className=' h-full gap-[22px] flex justify-center items-center '>
            <p className='font-dana font-medium text-[12px] text-[#D2D2D2]'>
              سوالات متداول
            </p>
            <p className='font-dana font-medium text-[12px] text-[#D2D2D2]'>
              قوانیین و مقررات
            </p>
          </div>
          <p className=' font-medium text-[12px] text-[#D2D2D2]'>
            تمامی حقوق این سایت متعلق به وب سایت هورسان میباشد..
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
