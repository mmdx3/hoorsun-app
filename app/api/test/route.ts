import { NextRequest, NextResponse } from "next/server";
// import dbConnect from "@/app/utils/dbConnect";
// import User from "@/app/models/User";
import axios from "axios";
import Redis from "ioredis";
import { createClient } from "redis";
import RedisClient from "@/app/utils/redisService";
import redisService from "@/app/utils/redisService";
import dbConnect from "@/app/utils/dbConnect";
import User from "@/app/models/User";

export async function GET(req: NextRequest) {
  // try {
  //   await dbConnect(); //INFO: Database connection
  //   const user = await User.findOne({ phoneNumber: "09354501795" }).exec();
  //   if (!user) {
  //     const newuser = new User({
  //       name: "mohammad jalalabadi",
  //       phoneNumber: "09354501795",
  //     });

  //     newuser.save();
  //     return NextResponse.json({
  //       message: "Database connected successfully! and user added",
  //     });
  //   } else {
  //     return NextResponse.json({
  //       message: "Database connected successfully! and user alredy exist!",
  //     });
  //   }
  // } catch (error) {
  //   console.error("Database connection error:", error);
  //   return NextResponse.json(
  //     { message: "Failed to connect to database" },
  //     { status: 500 },
  //   );
  // }

  // const otp = Math.floor(1000 + Math.random() * 9000);
  // redisService.connect();

  // redisService.set("otp", otp.toString() , 500 ).then((res) => {
  //   console.log(res); // OK
  // });
  // // مدیریت خطاها

  // // خواندن مقدار OTP در بازه زمانی 20 ثانیه
  // const storedOtp = await redisService.get("otp");
  // redisService.disconnect();
  // return NextResponse.json(storedOtp);

  const body = req.json();

  const headers = req.headers;
  const cookies = req.cookies;
  return NextResponse.json({
    headers,
    cookies,
  });
}
