import Image from 'next/image'
import FeedBackBg from '@/public/images/feedbackSection.png'
const FeedbackSection = () => {
  return (
    <div className='relative w-[86%] h-[167px] rounded-[56px] md:flex justify-center items-center hidden gap-[83px] bg-[#131313] max-w-[1239px] select-none'>
      <Image
        src={FeedBackBg}
        alt=''
        className='w-full h-full absolute top-0 left-0 rounded-[56px] opacity-[69%] object-cover z-[0]'
      />
      <div className='w-[192px]  gap-[13px] flex flex-col justify-center items-center z-10'>
        <span className='font-bold font-vazir text-[40px] leading-[50px] text-center text-[#d9d9d9]'>
          + 1000
        </span>
        <p className='font-dana font-medium text-[13px] leading-[20px] text-center text-[#c4c4c4]'>
          داشتن بیش از 1000 سفارش انلاین در روز
        </p>
      </div>
      {/* line */}
      <div className='w-[88px] border border-[#e7e7e7] -rotate-90 opacity-[15%] '></div>
      <div className='w-[192px]  gap-[13px] flex flex-col justify-center items-center z-10'>
        <span className='font-bold font-vazir text-[40px] leading-[50px] text-center text-[#d9d9d9]'>
          + 20
        </span>
        <p className='font-dana font-medium text-[13px] leading-[20px] text-center text-[#c4c4c4]'>
          داشتن تنوع غذایی متنوع که شما را راضی میکند
        </p>
      </div>
      {/* line */}
      <div className='w-[88px] border border-[#e7e7e7] -rotate-90 opacity-[15%] '></div>
      <div className='w-[192px]  gap-[13px] flex flex-col justify-center items-center z-10'>
        <span className='font-bold font-vazir text-[40px] leading-[50px] text-center text-[#d9d9d9] dir-rtl'>
        99% <span className='font-bold text-[20px] text-center'>رضایت</span> 
        </span>
        <p className='font-dana font-medium text-[13px] leading-[20px] text-center text-[#c4c4c4]'>
          پشتیبانی مشتری قابل اعتماد ما تجربیات عالی را ارائه می دهیم{' '}
        </p>
      </div>
    </div>
  )
}

export default FeedbackSection
