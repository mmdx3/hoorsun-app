import Header from './components/Header'
import Footer from './components/Footer'
import Image from 'next/image'
import HomeBg from '@/public/images/homeBg.png'
import HeroSection from './components/home/HeroSection'
import FeedbackSection from './components/home/FeedbackSection'
import PopularFoodSection from './components/home/popularFoodSection'
import NewstFoodSection from './components/home/NewstFoodSection'
import PopularBurger from './components/home/popularBurger'
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
      <main className='flex flex-col items-center justify-start gap-[30px] mt-8'>
        <HeroSection />
        <FeedbackSection />
        <PopularFoodSection/>
        <NewstFoodSection />
        <PopularBurger />
      </main>
      <Footer />
    </>
  )
}
