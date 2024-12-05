const Button = ({ text }: { text: string }) => {
  return (
    <button className='w-[151px] h-[57px] bg-[#D51F26] rounded-[16px] py-[17px] px-[36px]  font-dana  active:scale-[.85] transition-all  ease-linear  text-white  overflow-hidden relative  hover:brightness-150  active:opacity-75 outline-none duration-300 group'>
      <span className='bg-white shadow-red-800 absolute -top-[150%] left-0 inline-flex w-full h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]'></span>
      {text}
    </button>
  )
}

export default Button
