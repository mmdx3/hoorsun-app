import redisService from "../utils/redisService";

export default async function verifyOtp(otp: string, phoneNumber: string) {
  await redisService.connect();
  const otpFromRedis = await redisService.get(`otp:${phoneNumber}`);
  await redisService.disconnect();
  if (otpFromRedis === otp) {
    return true;
  }
  return false;
}
