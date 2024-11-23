'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'
import ServerError from '../components/error/ServerError'
const LayoutProvider  = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname()
  const isAuthPage = pathName.startsWith('/auth');
  
  return (
    <div>

      {!isAuthPage && <Header />}
      {children}
      {!isAuthPage && <Footer />}
    </div>
  )
}

export default LayoutProvider 
