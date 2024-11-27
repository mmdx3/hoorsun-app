import { useEffect, useState } from "react";

export default function useCountDown(initialTime: number) {
  const [countDown, setCountDown] = useState(initialTime);

  useEffect(() => {
    if (countDown <= 0) return; // اگر شمارش تمام شده است، از اجرای ادامه جلوگیری کن

    const interval = setInterval(() => {
      setCountDown((prevCountDown) => {
        if (prevCountDown <= 1) {
          clearInterval(interval); // متوقف کردن شمارش معکوس
          return 0; // تنظیم مقدار نهایی به 0
        }
        return prevCountDown - 1; // کاهش مقدار
      });
    }, 1000);

    return () => clearInterval(interval); // پاک کردن تایمر هنگام حذف کامپوننت یا رندر جدید
  }, [countDown]); // اثر وابسته به مقدار countDown

  return countDown; // برگرداندن مقدار شمارش فعلی
}
