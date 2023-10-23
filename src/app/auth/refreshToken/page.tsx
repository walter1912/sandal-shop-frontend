'use client'
import React, { useEffect } from 'react';
import { useAuthSuccess } from '~/lib/hooks/useAuthSuccess';
import { useAppDispatch } from '~/lib/store/hook';
import { getLocalStorage } from '~/lib/utils/localStorage';
import { authRequest } from '~/services/auth/authRequest';

function Page() {
    const dispatch = useAppDispatch();
    useEffect(()=> {
        const refresh_token = getLocalStorage("refresh_token");
        authRequest.refreshToken(refresh_token, dispatch);
    }, [])
    useAuthSuccess();
    return (
        <div>
            Dang lấy lại accecss_token
        </div>
    );
}

export default Page;