const WatssappIcon = ({
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
        d='M25.3082 45.9254C36.725 45.9254 45.9801 36.6703 45.9801 25.2535C45.9801 13.8367 36.725 4.58154 25.3082 4.58154C13.8914 4.58154 4.63623 13.8367 4.63623 25.2535C4.63623 28.3779 5.3294 31.3405 6.57034 33.9957L5.09719 43.082C4.8708 44.4783 6.08225 45.6844 7.47758 45.4519L16.4809 43.9513C19.1579 45.2174 22.1503 45.9254 25.3082 45.9254Z'
        fill={color}
      />
      <path
        d='M33.5771 31.6849V30.7832C33.5771 29.6631 32.8952 28.6559 31.8552 28.2399L30.8908 27.8541C30.0645 27.5236 29.1497 27.7208 28.5336 28.2986C28.1936 28.6174 27.7482 28.8622 27.3077 28.7098C26.4786 28.423 25.1098 27.8113 23.9302 26.6318C22.7506 25.4522 22.139 24.0834 21.8522 23.2543C21.6998 22.8138 21.9445 22.3683 22.2634 22.0284C22.8411 21.4123 23.0384 20.4975 22.7078 19.6712L22.3221 18.7068C21.9061 17.6668 20.8989 16.9849 19.7788 16.9849H18.8771C17.8622 16.9849 17.0396 17.8075 17.0396 18.8224C17.0396 26.941 23.621 33.5224 31.7396 33.5224C32.7544 33.5224 33.5771 32.6997 33.5771 31.6849Z'
        fill={color}
      />
    </svg>
  )
}

export default WatssappIcon
