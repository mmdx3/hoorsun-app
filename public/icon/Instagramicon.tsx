const Instagramicon = ({
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
      viewBox='0 0 50 51'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        opacity='0.4'
        d='M4.52173 12.8503C4.52173 8.2836 8.22379 4.58154 12.7905 4.58154H37.5968C42.1636 4.58154 45.8656 8.2836 45.8656 12.8503V37.6567C45.8656 42.2234 42.1636 45.9254 37.5968 45.9254H12.7905C8.22379 45.9254 4.52173 42.2234 4.52173 37.6567V12.8503Z'
        fill={color}
      />
      <circle cx='37.597' cy='12.8504' r='2.06719' fill={color} />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M25.1939 35.5897C30.9023 35.5897 35.5299 30.9621 35.5299 25.2537C35.5299 19.5453 30.9023 14.9177 25.1939 14.9177C19.4855 14.9177 14.8579 19.5453 14.8579 25.2537C14.8579 30.9621 19.4855 35.5897 25.1939 35.5897ZM25.1938 31.4552C28.6188 31.4552 31.3954 28.6786 31.3954 25.2536C31.3954 21.8286 28.6188 19.052 25.1938 19.052C21.7687 19.052 18.9922 21.8286 18.9922 25.2536C18.9922 28.6786 21.7687 31.4552 25.1938 31.4552Z'
        fill={color}
      />
    </svg>
  )
}

export default Instagramicon
