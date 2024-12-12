import React from 'react'
import BreadCrumb from '../components/ui/BreadCrumb'
import Banner from './components/Banner'

const page = () => {
  return (
    <main className='container mx-auto  px-16 mt-7'>
      <BreadCrumb text='منو' link='/reservation' />
      <div className='w-full flex flex-wrap mt-5 max-lg:justify-center max-lg:items-center '>
       <Banner />
      </div>
    </main>
  )
}

export default page
