'use client'
import Image from 'next/image'
import UserIcon from '@/public/icon/User.svg'
import CartIcon from '@/public/icon/CartIcon.svg'
import SearchIcon from '@/public/icon/SearchHeader.svg'
import DownloadApp from '@/public/icon/downloadApp.svg'
import Logo from '@/public/icon/Logo.svg'
import HoorsunText from '@/public/icon/HorsunText.svg'
import HamburgerMenu from '@/public/icon/Hamburgermenu.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const NavLink = [
  { name: 'تماس با ما', url: '/contact' },
  { name: 'درباره ما', url: '/about' },
  { name: 'مقالات', url: '/articles' },
  { name: 'رزرو غذا', url: '/reservation' },
  { name: 'صفحه اصلی', url: '/' }
]
const Header = () => {
  const pathname = usePathname()
  const [hasDownloadApp, setHasDownloadApp] = useState(true)

  useEffect(() => {
    if (pathname !== '/') {
      setHasDownloadApp(false)
    }
  }, [pathname, hasDownloadApp])
  return (
    <header className='max-w-[354px] md:max-w-[1320px] h-[24px] md:h-[75px]  mx-auto'>
      <div className='w-full h-full flex justify-center items-center py-3 md:py-5 z-10 mx-auto mt-3 gap-[255px] md:gap-[230px]'>
        <div className='w-[235px] h-[49px] gap-[13px]  justify-center items-center md:flex hidden'>
          <div className='bg-white size-[48px] rounded-[8px]  shadow-lg'>
            <Image src={UserIcon} alt='' className='cursor-pointer ' />
          </div>
          <div className='bg-white size-[48px] rounded-[8px]  shadow-lg'>
            <Image src={CartIcon} alt='' className='cursor-pointer ' />
          </div>
          <div className='bg-white size-[48px] rounded-[8px]  shadow-lg'>
            <Image src={SearchIcon} alt='' className='cursor-pointer ' />
          </div>
          {hasDownloadApp && (
            <div className='bg-white size-[48px] rounded-[8px]  shadow-lg'>
              <Image src={DownloadApp} alt='' className='cursor-pointer ' />
            </div>
          )}
        </div>
        <ul className='w-[438px] h-[25px] gap-[36px]  justify-center items-center  md:flex hidden '>
          {NavLink.map((item, index) => (
            <li key={index}>
              <Link
                href={item.url}
                className='cursor-pointer font-dana font-medium text-[16px] leading-[25px] text-black'
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Hamburger Menu */}
        <div className='size-[24px] md:hidden cursor-pointer '>
          <Image src={HamburgerMenu} alt='' className='size-[24px]' />
        </div>
        {/* logo */}
        <div className='w-[75px]  md:w-[179px] h-[21px] md:h-[50px] gap-[6px] md:gap-[16px] flex justify-center items-center'>
          <div className='w-[50px] md:w-[119px] h-full flex flex-col text-right justify-center items-end'>
            <Image
              src={HoorsunText}
              alt=''
              className='w-[44px] h-[14px] md:w-[105px] md:h-[33px] text-right'
            />
            <span className='w-[50px] md:w-[119px] h-[7px] md:h-[16px] font-satoshi font-medium text-[5px] md:text-[12px] leading-[16px] text-[#121212] text-right '>
              HORSUN FAST FOOD
            </span>
          </div>
          <Image
            src={Logo}
            alt=''
            className='w-[18px] md:w-[44px] h-[16px] md:h-[40px]'
          />
        </div>
      </div>
      <div className='w-[96%] h-[1px] bg-[#E7E7E7] md:block hidden mx-auto mt-2'></div>
    </header>
  )
}

export default Header
