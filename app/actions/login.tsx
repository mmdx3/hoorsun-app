'use server'

import { z } from 'zod'
import dbConnect from '../utils/dbConnect'
import User from '../models/User'
import sendOtp from '../service/sendOtp'
import redisService from '../utils/redisService'

// تعریف اسکیمای اعتبارسنجی
const phoneSchema = z.object({
  phoneNumber: z
    .string()
    .length(11, { message: 'شماره تلفن باید 11 رقم باشد.' })
    .regex(/^09\d{9}$/, { message: 'شماره تلفن معتبر نیست.' })
})

// تابع اصلی
const LoginServerAction = async (prevState: any, formData: FormData) => {
  const { phoneNumber } = Object.fromEntries(formData.entries())

  // بررسی وجود شماره تلفن
  if (!phoneNumber) {
    return {
      ...prevState,
      error: 'لطفاً شماره تلفن خود را وارد کنید.'
    }
  }

  // اعتبارسنجی شماره تلفن
  const validationResult = phoneSchema.safeParse({ phoneNumber })
  if (!validationResult.success) {
    return {
      ...prevState,
      error: validationResult.error.issues[0].message
    }
  }

  try {
    // اتصال به دیتابیس
    await dbConnect()

    // بررسی وجود کاربر با شماره تلفن
    const existingUser = await User.findOne({ phoneNumber }).exec()
    if (!existingUser) {
      return {
        ...prevState,
        message: 'کاربری با این شماره تلفن وجود ندارد.'
      }
    }

    const otp = await sendOtp(phoneNumber as string)
    if (!otp) {
      return {
        ...prevState,
        message: 'مشکلی در ارسال کد تأیید به وجود آمد.'
      }
    }

    // بازگشت نتیجه موفقیت‌آمیز
    return {
      ...prevState,
      data: { phoneNumber },
      success: true,
      message: `کد تأیید: ${otp} به شماره ${phoneNumber} ارسال شد.`
    }
  } catch (error) {
    // مدیریت خطاهای کلی
    console.error('Error in LoginServerAction:', error)
    return {
      ...prevState,
      message: 'مشکلی پیش آمد، لطفاً دوباره تلاش کنید.'
    }
  }
}

export default LoginServerAction
