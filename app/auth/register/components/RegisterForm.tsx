'use client'
import React, { useEffect, useState } from 'react'
import userSvg from '@/public/icon/userFormIcon.svg'
import MobileIcon from '@/public/icon/Mobile.svg'
import Input from '@/app/components/ui/Input'
import SubmitBtn from '@/app/components/ui/SubmitBtn'
import Link from 'next/link'
import { useFormState } from 'react-dom'
import RegisterServer from '@/app/actions/register'
import useAlert from '@/app/hooks/useAlert'
import { useDispatch, useSelector } from 'react-redux'
import { RegisterUser, setStep } from '@/app/context/Features/auth/authSlice'
import { RootState } from '@/app/context/RootReducer'

interface IinitialState {
  data: { phoneNumber: string; fullname: string }
  errors: { fullname: string[]; phoneNumber: string[] }
  success: boolean
  message: string
}
const initialState: IinitialState = {
  data: { phoneNumber: '', fullname: '' },
  errors: { fullname: [], phoneNumber: [] },
  success: false,
  message: ''
}

const RegisterForm = () => {
  const [state, action] = useFormState(RegisterServer, initialState)
  const dispatch = useDispatch()
  const Toast = useAlert()
  useEffect(() => {
    if (state?.message !== '') {
      Toast.fire({
        icon: state?.success ? 'success' : 'error',
        title: state?.message
      })
    }
    if (state?.success) {
      dispatch(RegisterUser(state?.data))
      dispatch(setStep(2))
    }
  }, [state])
  return (
    <div className='xl:w-[413px] w-[357px] h-[427px]  xl:h-[484px] rounded-[14px] xl:rounded-2xl gap-[26px] xl:gap-[30px] bg-white flex flex-col items-center justify-start shadow-[0px_16px_24px_0px_#4646460D] xl:mt-[6rem] py-[46px] px-[50px]'>
      <div className='w-[278px] xl:w-[316px] h-[50px] xl:h-[58px] gap-[8px] xl:gap-[10px] text-right'>
        <h1 className=' font-dana font-bold text-[20px] xl:text-[24px] text-[#313131] '>
          ثبت نام
        </h1>
        <span className='font-dana font-semibold text-[12px] xl:text-[14px] text-[#494949] '>
          لطفا جهت ثبت نام شماره موبایل خود را وارد نمایید
        </span>
      </div>
      <form
        action={action}
        className='w-[269px] xl:w-[306px] h-[268px] xl:h-[304px] gap-[24px] xl:gap-[28px] flex flex-col items-end justify-start text-right '
      >
        {/* input */}
        <Input
          name='fullname'
          icon={userSvg}
          placeholder='نام و نام خانوادگی خود را کامل وارد نمایید'
          label='نام و نام خانوادگی'
          type='text'
          error={state?.errors?.fullname}
        />
        <Input
          name='phoneNumber'
          icon={MobileIcon}
          placeholder='شماره موبایل را وارد نمایید'
          label='شماره موبایل'
          type='tel'
          error={state?.errors?.phoneNumber}
        />
        <SubmitBtn label='ثبت نام ' />
      </form>
      <span className='w-[154px] xl:w-[174px] text-center font-dana font-medium text-[12px] xl:text-[14px] '>
        آیا قبلا ثبت نام کرده اید؟
        <Link
          href={'/auth/login'}
          className='text-[#D51F26] font-semibold font-danafanum'
        >
          ورود
        </Link>{' '}
      </span>
    </div>
  )
}

export default RegisterForm
