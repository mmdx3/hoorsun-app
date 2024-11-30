import redisService from "../utils/redisService";

export default async function verifyOtp(otp: string, phoneNumber: string) {
  const otpFromRedis = await redisService.get(`otp:${phoneNumber}`);
  if (otpFromRedis === otp) {
    await redisService.del(`otp:${phoneNumber}`);
    return true;
  }
  return false;
}
