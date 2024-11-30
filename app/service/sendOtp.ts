import redisService from "../utils/redisService";

export default async function sendOtp(phoneNumber: string) {
  try {
    const otp = Math.floor(1000 + Math.random() * 9000);
    //TODO: connect to a real api server
    //   save sended otp to redis
    redisService.connect();
    redisService.set(`otp:${phoneNumber}`, otp.toString(), 180);
    return otp;
  } catch (err) {
    throw new Error("there was an error");
  }
}
