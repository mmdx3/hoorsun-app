"use server";

import { z } from "zod";
import User from "../models/User";
import sendOtp from "../service/sendOtp";
import dbConnect from "../utils/dbConnect";

// Zod schema
const mySchema = z.object({
  fullname: z
    .string()
    .min(6, { message: "نام و نام خانوادگی نباید کمتر از 6 کاراکتر باشد " })
    .max(20)
    .regex(/^[آ-ی\s]+$/, {
      message: "لطفا نام و نام خانوادگی خود را درست وارد کنید",
    }),
  phoneNumber: z
    .string()
    .regex(/^09\d{9}$/, { message: "شماره تلفن معتبر نیست." }),
});

export default async function RegisterServer(
  prevState: any,
  formData: FormData,
) {
  const { fullname, phoneNumber } = Object.fromEntries(formData.entries());

  // مدیریت خطاها
  try {
    // اعتبارسنجی با Zod
    const validation = mySchema.safeParse({
      fullname,
      phoneNumber,
    });
    if (!validation.success) {
      return {
        data: {},
        errors: validation.error.flatten().fieldErrors,
        success: false,
        message: "اطلاعات وارد شده معتبر نیست.",
      };
    }

    // بررسی وجود کاربر در دیتابیس
    dbConnect();
    const existingUser = await User.findOne({ phoneNumber }).exec();
    if (existingUser) {
      return {
        data: {},
        errors: { phoneNumber: ["این شماره قبلاً ثبت شده است."] },
        success: false,
        message: "کاربری با این شماره تلفن وجود دارد.",
      };
    }

    const otpSend = await sendOtp(phoneNumber as string);
    
    if (otpSend) {
      return {
        data: { fullname: fullname ,  phoneNumber: phoneNumber , isverified: false },
        errors: {phoneNumber:[''] , fullname:['']},
        success: true,
        message: `کد تایید : ${otpSend} به شماره ${phoneNumber} ارسال شد. `,
      };
    }
  } catch (error: any) {
    if (error.isAxiosError) {
      return {
        data: {},
        errors: {},
        success: false,
        message: "خطا در ارسال پیامک. لطفاً بعداً تلاش کنید.",
      };
    }

    return {
      data: {},
      errors: {},
      success: false,
      message: "یک خطای غیرمنتظره رخ داده است.",
    };
  }
}
