import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'لاگین - هورسان ',
  description: 'صفحه لاگین رستوران هورسان '
}

export default function layout ({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
