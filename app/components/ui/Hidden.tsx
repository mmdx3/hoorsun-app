import React from 'react'

const Hidden = ({
  children,
  mdUp,
  mdDown
}: {
  children: React.ReactNode
  mdUp?: boolean
  mdDown?: boolean
}): React.ReactNode => {
  return (
    <div
      className={`${mdUp ? 'md:hidden' : ''} ${
        mdDown ? 'max-2xl:hidden md:block' : ''
      }`}
    >
      {children}
    </div>
  )
}

export default Hidden
