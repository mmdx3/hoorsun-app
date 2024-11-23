import Link from "next/link";
import "./globals.css";

import React from "react";

function notFound() {
  return (
    <>
      <main className=" bg-gray-100  min-h-screen dark:bg-black flex justify-center items-center">
        <div className="mt-10 flex flex-col items-center justify-center gap-y-6">
          <h1 className="text-9xl font-bold text-zinc-600 dark:text-zinc-300">
            404
          </h1>
          <h2 className="text-lg text-zinc-600 dark:text-zinc-300 lg:text-xl">
            صفحه‌ای که دنبال آن بودید پیدا نشد!
          </h2>
          <Link className="bg-blue-500 rounded-lg text-white px-6 py-3" href="/">
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </main>
    </>
  );
}

export default notFound;
