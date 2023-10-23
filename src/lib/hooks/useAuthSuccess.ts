"use client";

import { useEffect } from "react";
import { useAppSelector } from "../store/hook";
import { useRouter } from "next/navigation";

export function useAuthSuccess() {
  const response = useAppSelector((state) => state.response);

  // sau khi dang nhap thi se chuyen toi trang chu
  const router = useRouter();
  return useEffect(() => {
    setTimeout(() => {
      if (response.type === "success" && response.toast) router.push("/");
    }, 1000);
  }, [response]);
}
