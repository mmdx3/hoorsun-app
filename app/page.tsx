import Header from './components/Header'
import Footer from './components/Footer'
import Image from 'next/image'
import HomeBg from '@/public/images/homeBg.png'
import HeroSection from './components/home/HeroSection'
export default function Home () {
  return (
    <>
      {/* bg */}
      <Image
        src={HomeBg}
        alt=''
        className='w-full h-full object-cover fixed top-0 left-0 z-[-1] hidden md:block opacity-[11%]'
      />
      <Header />
      <main className='h-screen z-10 container mx-auto flex flex-col items-center justify-center'>
        <HeroSection />
      </main>
      <Footer />
    </>
  )
}
