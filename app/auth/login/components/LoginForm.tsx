'use client'
import React, { Dispatch, SetStateAction, useEffect } from 'react'
import Input from '@/app/components/ui/Input'

import MobileIcon from '@/public/icon/Mobile.svg'
import SubmitBtn from '@/app/components/ui/SubmitBtn'
import Link from 'next/link'
import { useFormState } from 'react-dom'
import LoginServerAction from '@/app/actions/login'
import useAlert from '@/app/hooks/useAlert'
import { useDispatch } from 'react-redux'
import { AddUser } from '@/app/context/Features/auth/authSlice'

interface IinitialState {
  data: { phoneNumber: string }
  success: boolean
  message: string
  error: string
}

const initialState: IinitialState = {
  data: { phoneNumber: '' },
  success: false,
  message: '',
  error: ''
}

interface Iprops {
   setStep: Dispatch<SetStateAction<number>>
}


const LoginForm = ({ setStep} : Iprops) => {
  const [state, action] = useFormState(LoginServerAction, initialState)
  const Toast = useAlert()
  const dispatch = useDispatch()
  useEffect(() => {
    if (state.message !== '') {
      Toast.fire({
        icon: state.success ? 'success' : 'error',
        text: state.message
      })
    }
   if (state.success) {
      dispatch(AddUser(state.data));
      setStep(2)
   }
   
    
  }, [state])
  return (
    <div className='w-[357px]  md:w-[413px] h-[357px] rounded-2xl gap-[30px] bg-white flex flex-col justify-start items-end shadow-[0px_16px_24px_0px_#4646460D] py-[35px] px-[48px] '>
      <div className='w-[273px]  md:w-[316px] h-[50px] md:h-[58px] gap-[8px] md:gap-[10px] flex flex-col justify-end items-end mx-auto'>
        <h1 className='font-vazir font-bold text-[20px] md:text-[24px] text-[#313131] '>
          ورود
        </h1>
        <span className='font-vazirfd text-[11px] md:text-[13px] font-semibold text-right text-[#494949]'>
          لطفا جهت ورود شماره موبایل خود را وارد نمایید
        </span>
      </div>
      <div className='w-[264px] md:w-[306px]  gap-[24px] md:gap-[28px] flex flex-col justify-end items-end mx-auto'>
        <form
          action={action}
          className='w-full h-[127px] md:h-[146px] gap-[25px] md:gap-[29px] flex flex-col justify-end items-end text-right'
        >
          <Input
            name='phoneNumber'
            icon={MobileIcon}
            placeholder='شماره موبایل را وارد نمایید'
            label='شماره موبایل'
            type='tel'
            error={[state?.error]} 
          />
          <SubmitBtn label='ورود ' />
        </form>
        <span className=' text-center font-dana font-medium text-[12px] md:text-[14px] mx-auto'>
          ایا تا به حال ثبت نام نکرده اید؟{' '}
          <Link
            href={'/auth/register'}
            className='text-[#D51F26] font-semibold font-danafanum'
          >
            ثبت نام
          </Link>{' '}
        </span>
      </div>
    </div>
  )
}

export default LoginForm
