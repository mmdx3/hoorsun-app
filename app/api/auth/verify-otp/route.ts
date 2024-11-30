import User from "@/app/models/User";
import verifyOtp from "@/app/service/verifyOtp";
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

    await redisService.connect();
    const verifydOtp = await verifyOtp(otp, userData.phoneNumber as string);

    if (!verifydOtp) {
      await redisService.disconnect();
      return new Response("کد تایید اشتباه است", { status: 400 });
    }
    //  For login 
    const user :IUserModel = await User.findOne({
      phoneNumber: userData.phoneNumber,
    }).exec();
    if (user) {
      await redisService.disconnect();
      return NextResponse.json({
        success: true,
        message: "با موفقیت وارد شدید :)",
        data: {
          userId: user._id,
          fullName: user.fullName,
          phoneNumber: user.phoneNumber,
          isVerified: true,
        },
      });
    }

    // ایجاد کاربر جدید
    const newuser: IUserModel = new User({
      fullName: userData.fullname,
      phoneNumber: userData.phoneNumber,
    });

    await newuser.save();

    const response = NextResponse.json({
      success: true,
      message: "با موفقیت ثبت نام شدید :)",
      data: {
        userId: newuser._id,
        fullName: newuser.fullName,
        phoneNumber: newuser.phoneNumber,
        isVerified: true,
      },
    });
    await redisService.disconnect();
    return response;
  } catch (error) {
    await redisService.disconnect();
    console.error("Error parsing request:", error);
    return new Response("there is an error", { status: 400 });
  }
};
