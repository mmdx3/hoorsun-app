'use client'
import Image from 'next/image'
import React, { FormEvent, useCallback, useEffect } from 'react'
import BackIcon from '@/public/icon/BackIcon.svg'
import { useDispatch, useSelector } from 'react-redux'
import { RegisterUser, setStep } from '@/app/context/Features/auth/authSlice'
import SubmitBtn from '@/app/components/ui/SubmitBtn'
import OtpInput from '@/app/components/ui/OtpInputs'
import { RootState } from '@/app/context/RootReducer'
import useAlert from '@/app/hooks/useAlert'
import useCountDown from '@/app/hooks/useCountDown'
import { formatTime } from '@/app/libs/FormatTime'
import {  useRouter } from 'next/navigation'
import axiosInstance from '@/app/libs/AxiosInstans'
const OtpVerification = () => {
  const [otp, setOtp] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)
  const [phoneNumber, setPhoneNumber] = React.useState('')
  const userData = useSelector((state: RootState) => state.auth.user)
  const dispatch = useDispatch()
  const Toast = useAlert()
  const router = useRouter()
  // INFO: count down for 3 minutes
  const countDown = useCountDown(180)

  const handleClick = () => {
    dispatch(setStep(1))
  }
  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      setIsLoading(true)
      axiosInstance
        .post(`/api/auth/verify-otp`, {
          otp,
          userData: userData
        })
        .then(response => {
          setIsLoading(false)
          if (response.status === 200) {
            Toast.fire({
              icon: 'success',
              title: 'با موفقیت ثبت نام شدید :)'
            })
            console.log(response.data.data);
            
            dispatch(RegisterUser(response.data.data));
            router.push('/')
          }
        })
        .catch(err => {
          setIsLoading(false)
          Toast.fire({
            icon: 'error',
            title: err.response?.data
          })
        })
    },
    [otp, phoneNumber, Toast]
  )
  useEffect(() => {
    if ('phoneNumber' in userData) {
      setPhoneNumber(userData.phoneNumber)
    }
  }, [userData])

  return (
    <form
      onSubmit={handleSubmit}
      className='w-[417px] h-[453px] rounded-2xl gap-[30px] bg-white flex flex-col items-start justify-start p-[34px] shadow-[0px_16px_24px_0px_#4646460D]'
    >
      {/* Back */}
      <div
        onClick={handleClick}
        className='flex justify-center items-center gap-[3px] cursor-pointer'
      >
        <Image src={BackIcon} alt='' className='size-[18px] ' />
        <span className='font-dana font-normal text-[10px] text-[#313131] '>
          بازگشت
        </span>
      </div>
      <div className='w-[309px] h-[82px] gap-[10px] flex flex-col items-center justify-center mx-auto '>
        <h2 className=' font-vazir font-bold text-[24px] text-[#2e2e2e]'>
          کد تایید
        </h2>
        <p className='font-vazirfd font-semibold text-[13px]  text-[#404040] text-center items-center flex justify-center '>
          کد 6 رقمی ارسال شده به شماره موبایل {phoneNumber} را وارد نمایید.
        </p>
      </div>
      {/*  */}
      <div className='w-[226px] h-[62px] gap-[10px] flex items-center justify-center mx-auto '>
        <OtpInput state={otp} setState={setOtp} />
      </div>
      <div className='w-[306px] h-[93px] gap-[28px] flex flex-col items-center justify-center mx-auto '>
        <SubmitBtn label='تایید و ثبت نام' isLoading={isLoading} />
        <p className='font-dana font-medium text-[14px] flex gap-[2px] text-right'>
          {formatTime(countDown)}{' '}
          <span className='text-[#D51F26]'>ارسال مجدد کد </span> تا
        </p>
      </div>
    </form>
  )
}

export default OtpVerification
