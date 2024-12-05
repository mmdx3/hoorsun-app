import Image from 'next/image'
import bg from '@/public/images/SocialMediaBg.png'
import SocialMediaImg from '@/public/images/SocialMediaImg.png'
import Link from 'next/link'
import FaceBookIcon from '@/public/icon/FaceBookIcon'
import WatssappIcon from '@/public/icon/WatssappIcon'
import YouTubeIcon from '@/public/icon/YouTubeIcon'
import Instagramicon from '@/public/icon/Instagramicon'
const SocialMediaBanner = () => {
  return (
    <section className='w-full max-w-[1277px] h-[577px] gap-[10px] flex justify-center items-center relative'>
      <div className='w-full h-[387px] rounded-[60px] gap-[10px] flex justify-center items-center bg-[#BD292F] shadow-[5.85px_29.18px_41.09px_0px_#E5E5E566] relative z-10'>
        <Image
          src={bg}
          alt=''
          className='w-full h-full absolute top-0 left-0 object-cover rounded-[60px] opacity-[68%] z-[-1] '
        />
        <div className='w-full px-[40.5px] h-[277px] gap-[45px] flex flex-col justify-start items-end '>
          <div className='w-[629px] h-[182px] gap-[30px] flex flex-col justify-between items-end '>
            <div className='relative'>
              <h3 className='font-dana font-bold text-[32px] text-right text-white flex gap-2 dir-rtl z-10 relative'>
                ما را در
                <span className='text-black'>شبکه های اجتماعی</span>
                دنبال کنید.
              </h3>
              <div className='w-[253px] h-[62px] rounded-[6px] rotate-[-6deg] bg-[#F6B529] absolute top-0 right-[101px] z-[0]'></div>
            </div>
            <p className='w-[629px] font-dana font-normal text-[14px] text-white text-right'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              لورم لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
              با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز لورم
            </p>
          </div>
          <div className='w-[384px] h-[49px] gap-[62px] flex justify-center items-end'>
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
        src={SocialMediaImg}
        alt=''
        className='absolute left-[57px] top-0 z-20 '
      />
    </section>
  )
}

export default SocialMediaBanner
