import { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import Bg from '@/public/images/Bg.png'

export const metadata: Metadata = {
  title: 'رستوران هورسان - رزرو آنلاین ',
  description: '50 درصد تخفیف  برای ویژه هورسان '
}

export default function ReservationLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <Image
        src={Bg}
        alt=''
        className='w-full h-full object-cover absolute top-0 left-0 z-[-1] hidden md:block opacity-[17%]'
      />
      <Header />
      {children}
      <Footer />
    </>
  )
}
