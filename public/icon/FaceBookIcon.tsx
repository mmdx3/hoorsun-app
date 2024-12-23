const FaceBookIcon = ({
  color="white",
  w='50',
  h='51'
}: {
  color?: string
  w?: string
  h?: string
}) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox='0 0 50 51'
      fill='none'
      className='max-lg:size-[24px] lg:size-[51px]'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        opacity='0.4'
        d='M37.3398 4.58154H12.5334C7.96671 4.58154 4.26465 8.2836 4.26465 12.8503V37.6567C4.26465 42.2234 7.96671 45.9254 12.5334 45.9254H37.3398C41.9065 45.9254 45.6085 42.2234 45.6085 37.6567V12.8503C45.6085 8.2836 41.9065 4.58154 37.3398 4.58154Z'
        fill={color}
      />
      <path
        d='M35.2728 14.9177H30.1048C25.5381 14.9177 21.836 18.6198 21.836 23.1865V27.3209H14.6008V33.5225H21.836V45.9256H28.0376V33.5225H35.2728V27.3209H28.0376V23.1865C28.0376 22.0448 28.9631 21.1193 30.1048 21.1193H35.2728V14.9177Z'
        fill={color}
      />
    </svg>
  )
}

export default FaceBookIcon
