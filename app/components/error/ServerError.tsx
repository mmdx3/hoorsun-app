"use client";
import React from "react";
import { useRouter } from "next/navigation";
function ServerError() {
  const router = useRouter();
  const handleReload = () => {
    router.refresh();
  };
  return (
    <main className="flex-grow bg-gray-100 pb-14 pt-36 min-h-screen dark:bg-black xs:pt-36">
      <div className="mt-10 flex flex-col items-center justify-center gap-y-6">
        <h1 className="text-9xl font-bold text-zinc-600 dark:text-zinc-300">
          502
        </h1>
        <h2 className="text-lg text-zinc-600 dark:text-zinc-300 lg:text-xl">
          مشکل در اتصال به اینترنت ، لطفا از اتصال خود به اینترنت اطمینان حاصل
          فرمایید
        </h2>
        <button className="btn-primary px-6 py-3" onClick={handleReload}>
          تلاش دوباره
        </button>
      </div>
    </main>
  );
}

export default ServerError;
