/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: 'http://localhost:3000',
    MONGO_URL: process.env.MONGO_URI,
    KAVENEGAR_API_KEY: process.env.KAVENEGAR_API_KEY,
    REDIS_PASSWORD: process.env.REDIS_PASSWORD,
    REDIS_HOST: process.env.REDIS_HOST,
    REDIS_PORT: process.env.REDIS_PORT
  }
}

module.exports = nextConfig
