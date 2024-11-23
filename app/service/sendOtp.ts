import redisService from "../utils/redisService";

export default async function sendOtp(phoneNumber: string) {
  // send otp to phone number
  const otp = Math.floor(1000 + Math.random() * 9000);
  //TODO: connect to a real api server
  //   save sended otp to redis
  redisService.connect();
  redisService.set(`otp:${phoneNumber}`, otp.toString(), 120);
  redisService.disconnect();
  return otp;
}
