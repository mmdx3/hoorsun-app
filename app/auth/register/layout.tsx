import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'ثبت نام - هورسان ',
  description: 'صفحه ثبت نام هورسان'
}

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>
}

export default layout
