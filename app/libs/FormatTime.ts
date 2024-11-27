export const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60); // محاسبه دقیقه‌ها
  const seconds = time % 60; // محاسبه ثانیه‌ها
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0",
  )}`; // اضافه کردن صفر در صورت نیاز
};
