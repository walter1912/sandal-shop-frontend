'use client'
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useAppDispatch } from "~/lib/store/hook";
import { authActions } from "~/services/auth/authSlice";
import { responseActions } from "~/services/response/responseSlice";

function Page() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(authActions.logout());
    setTimeout(() => {
      dispatch(
        responseActions.toastify({
          message: "Đăng xuất thành công",
          type: "success",
        })
      );
      router.push('/');
    }, 2000);
  }, []);
  return <div>Đăng xuất</div>;
}

export default Page;
