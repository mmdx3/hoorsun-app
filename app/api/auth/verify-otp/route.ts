import User from "@/app/models/User";
import redisService from "@/app/utils/redisService";
import { IUserModel } from "@/type";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { otp, userData } = body;

    if (!otp || !userData) {
      return new Response("Invalid request: Missing otp or phoneNumber", {
        status: 400,
      });
    }

    // اتصال به Redis
    await redisService.connect();

    const storedOtp = await redisService.get(`otp:${userData.phoneNumber}`);
    if (!storedOtp) {
      await redisService.disconnect(); // بستن اتصال در صورت نیاز
      return new Response("کد تایید منقضی شده است", { status: 400 });
    }

    if (storedOtp !== otp) {
      await redisService.disconnect(); // بستن اتصال در صورت نیاز
      return new Response("کد تایید اشتباه است", { status: 400 });
    }

    // ایجاد کاربر جدید
    const newuser: IUserModel = new User({
      fullName: userData.fullname,
      phoneNumber: userData.phoneNumber,
    });

    await newuser.save();


    await redisService.del(`otp:${userData.phoneNumber}`);
    
    const response = NextResponse.json({
      success: true,
      message: "با موفقیت ثبت نام شدید :)",
      data: {
        userId : newuser._id,
        fullName: newuser.fullName,
        phoneNumber: newuser.phoneNumber,
        isVerified: true,
      }
    });

    await redisService.disconnect();
    return response;
  } catch (error) {
    console.error("Error parsing request:", error);
    await redisService.disconnect();
    return new Response("there is an error", { status: 400 });
  }
};
