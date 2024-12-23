const YouTubeIcon = ({
  color = 'white',
  w = '50',
  h = '51'
}: {
  color?: string
  w?: string
  h?: string
}) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox='0 0 51 51'
      className='max-lg:size-[24px] lg:size-[51px]'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        opacity='0.4'
        d='M4.89331 14.9177C4.89331 10.351 8.59537 6.64893 13.1621 6.64893H37.9684C42.5351 6.64893 46.2372 10.351 46.2372 14.9177V35.5896C46.2372 40.1564 42.5351 43.8584 37.9684 43.8584H13.1621C8.59537 43.8584 4.89331 40.1564 4.89331 35.5896V14.9177Z'
        fill={color}
      />
      <path
        d='M22.3554 18.4807L32.2034 23.4047C33.727 24.1665 33.727 26.3408 32.2034 27.1026L22.3554 32.0266C20.981 32.7138 19.3638 31.7143 19.3638 30.1776V20.3296C19.3638 18.7929 20.981 17.7934 22.3554 18.4807Z'
        fill={color}
      />
    </svg>
  )
}

export default YouTubeIcon
