import Image from 'next/image'
import bg from '@/public/images/SocialMediaBg.png'
import Img from '@/public/images/SocialMediaImg.png'
import Link from 'next/link'
import FaceBookIcon from '@/public/icon/FaceBookIcon'
import WatssappIcon from '@/public/icon/WatssappIcon'
import YouTubeIcon from '@/public/icon/YouTubeIcon'
import Instagramicon from '@/public/icon/Instagramicon'
const SocialMediaBanner = () => {
  return (
    <section className='w-full lg:max-w-[1277px] max-w-[362px] max-lg:container lg:h-[577px] gap-[10px] flex justify-center items-center relative max-lg:mt-[116px]'>
      <div className='w-full h-[216px] lg:h-[387px] rounded-[17px] max-lg:pb-[27px] lg:rounded-[60px] gap-[2px] lg:gap-[10px] flex flex-col lg:flex-row  justify-end lg:justify-center items-center bg-[#BD292F] shadow-[5.85px_29.18px_41.09px_0px_#E5E5E566] relative z-10'>
        <Image
          src={bg}
          alt=''
          className='w-full h-full absolute top-0 left-0 object-cover rounded-[17px] lg:rounded-[60px] opacity-[68%] z-[-1] '
        />
        <div className='w-full lg:px-[40.5px] h-[80px] lg:h-[277px] gap-[22px] lg:gap-[45px] flex flex-col lg:justify-start justify-end items-end '>
          <div className='max-lg:max-w-[313px] md:w-[629px] h-[34px] lg:h-[182px] gap-[15px] lg:gap-[30px] lg:flex lg:flex-col lg:justify-between lg:items-end '>
            <div className='relative'>
              <h3 className='font-dana font-bold text-[16px] lg:text-[32px] text-center lg:text-right text-white flex gap-2 dir-rtl z-10 relative'>
                ما را در
                <span className='text-black text-[16px] lg:text-[32px] text-center lg:text-right'>
                  شبکه های اجتماعی
                </span>
                دنبال کنید.
              </h3>
              <div className='w-[126px] lg:w-[253px] h-[30px] lg:h-[62px] rounded-[3px] lg:rounded-[6px] rotate-[-6deg] bg-[#F6B529] absolute top-0 right-[54px] lg:right-[101px] z-[0]'></div>
            </div>
            <p className='w-[629px] font-dana font-normal text-[14px] text-white text-right max-lg:hidden'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              لورم لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
              با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز لورم
            </p>
          </div>
          {/* SocialMedi Icons */}
          <div className='w-[191px] lg:w-[384px] h-[24px] lg:h-[49px] gap-[30px] lg:gap-[62px] flex justify-center items-end max-lg:mx-auto'>
            <Link
              href={'https://www.watssapp.com/+989354501795'}
              target='_blank'
            >
              {/* <Image src={WatssAppIcon} alt='WatssApp Icon' /> */}
              <WatssappIcon />
            </Link>
            <Link href={'https://t.me/+989354501795'} target='_blank'>
              {/* <Image src={faceBookIcon} alt='faceBook Icon' /> */}
              <FaceBookIcon />
            </Link>
            <Link href={'https://www.twitter.com/mmdx3'} target='_blank'>
              {/* <Image src={YoutubeIcon} alt='Youtube Icon' /> */}
              <YouTubeIcon />
            </Link>
            <Link
              href={'https://www.instagram.com/lifewith_mamad'}
              target='_blank'
            >
              {/* <Image src={InstagramIcon} alt='Instagram Icon' /> */}
              <Instagramicon />
            </Link>
          </div>
        </div>
      </div>
      <Image
        src={Img}
        alt=''
        className='absolute left-[62px] lg:left-[57px] top-[-102px] lg:top-0 z-20 max-lg:w-[233px] max-lg:h-[199px]'
      />
    </section>
  )
}

export default SocialMediaBanner
