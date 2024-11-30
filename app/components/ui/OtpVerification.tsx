'use client'
import Image from 'next/image'
import React, { Dispatch, FormEvent, SetStateAction, useCallback, useEffect } from 'react'
import BackIcon from '@/public/icon/BackIcon.svg'
import { useDispatch, useSelector } from 'react-redux'
import { AddUser, setStep } from '@/app/context/Features/auth/authSlice'
import SubmitBtn from '@/app/components/ui/SubmitBtn'
import OtpInput from '@/app/components/ui/OtpInputs'
import { RootState } from '@/app/context/RootReducer'
import useAlert from '@/app/hooks/useAlert'
import useCountDown from '@/app/hooks/useCountDown'
import { formatTime } from '@/app/libs/FormatTime'
import {  useRouter } from 'next/navigation'
import axiosInstance from '@/app/libs/AxiosInstans'

interface IProps {
  setStep : (number : 1|2) => void,
  btnlabel : string,
}


const OtpVerification = ({setStep , btnlabel} : IProps) => {
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
    setStep(1)
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
              title: response.data.message
            })            
            dispatch(AddUser(response.data.data));
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
      className='md:w-[417px] w-[357px] h-[392px]  md:h-[453px] rounded-[13px] md:rounded-2xl gap-[26px] md:gap-[30px] bg-white flex flex-col items-start justify-start p-[29px] md:p-[34px] shadow-[0px_16px_24px_0px_#4646460D]'
    >
      {/* Back button */}
      <div
        onClick={handleClick}
        className='flex justify-center items-center gap-[3px] cursor-pointer'
      >
        <Image src={BackIcon} alt='' className='size-[15px] md:size-[18px] ' />
        <span className='font-dana font-normal text-[8px] md:text-[10px] text-[#313131] '>
          بازگشت
        </span>
      </div>
      <div className='w-[267px] md:w-[309px] h-[71px] md:h-[82px] gap-[10px] flex flex-col items-center justify-center mx-auto '>
        <h2 className=' font-vazir font-bold text-[20px] md:text-[24px] text-[#2e2e2e]'>
          کد تایید
        </h2>
        <p className='font-vazirfd font-semibold text-[11px] md:text-[13px]  text-[#404040] text-center items-center flex justify-center '>
          کد 6 رقمی ارسال شده به شماره موبایل {phoneNumber} را وارد نمایید.
        </p>
      </div>
      {/*  */}
      <div className='w-[195px] md:w-[226px] h-[55px] md:h-[62px] gap-[10px] flex items-center justify-center mx-auto '>
        <OtpInput state={otp} setState={setOtp} />
      </div>
      <div className='w-[264px] md:w-[306px] h-[81px] md:h-[93px] gap-[24px] md:gap-[28px] flex flex-col items-center justify-center mx-auto '>
        <SubmitBtn label={btnlabel} isLoading={isLoading} />
        <p className='font-dana font-medium text-[12px] md:text-[14px] flex gap-[2px] text-right'>
          {formatTime(countDown)}{' '}
          <span className='text-[#D51F26]'>ارسال مجدد کد </span> تا
        </p>
      </div>
    </form>
  )
}

export default OtpVerification
