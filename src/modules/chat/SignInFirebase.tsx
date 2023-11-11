"use client";
import React from "react";
import GoogleButton from "react-google-button";

import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { authFirebase } from "~/lib/utils/firebaseInstance";
import { ButtonText } from "../global-styles/custom-mui";

const style = {
  wrapper: `flex justify-center`,
};

const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(authFirebase, provider);
 
};

const SignIn = () => {
  return (
    <div style={{ display: "block", width: "fit-content", padding: '8px'}}>
        <ButtonText onClick={googleSignIn} >
            Đăng nhập với gmail
        </ButtonText>
    </div>
  );
};

export default SignIn;
