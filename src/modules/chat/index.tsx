"use client";
import React, { LegacyRef, MutableRefObject, useEffect, useRef, useState } from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import { ButtonText } from "../global-styles/custom-mui";
import { Close } from "@mui/icons-material";
import Image from "next/image";
import chatGif from "~/assets/images/chat.gif";
import SignIn from "./SignInFirebase";
import { authFirebase, dbFirebase } from "~/lib/utils/firebaseInstance";
import { useAuthState } from "react-firebase-hooks/auth";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import Message from "./Message";
import SendMessage from "./SendMessage";
import { MessageDto } from "~/models/chat";
import { useAppSelector } from "~/lib/store/hook";

const ChatUI: React.FC = () => {
  const auth = useAppSelector((state) => state.auth);

  const [user] = useAuthState(authFirebase);
  console.log("login success: ", user);
  const [close, setClose] = useState<boolean>(true);

  const [messages, setMessages] = useState<MessageDto[]>([]);
  const scroll: any = useRef();

  useEffect(() => {
    const q = query(collection(dbFirebase, "chats"), orderBy("timestamp"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let chats: any[] = [];
      querySnapshot.forEach((doc) => {
        chats.push({ ...doc.data(), id: doc.id });
      });
      let result: MessageDto[] = [];
      for (let i = 0; i < chats.length; i++) {
        if (
          chats[i].userReceive == auth.username ||
          chats[i].userSend == auth.username
        ) {
          result.push(chats[i]);
        }
      }
      setMessages(result);
      console.log("messages: ", result);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      {close ? (
        <>
          <ButtonText
            style={{
              position: "fixed",
              right: "40px",
              bottom: "80px",
            }}
            onClick={() => setClose(false)}
          >
            <Tooltip title="Nhắn tin với shop">
              <Image
                src={chatGif}
                alt={"Chatting with shop"}
                width={80}
                height={80}
              />
            </Tooltip>
          </ButtonText>
        </>
      ) : (
        <Box
          sx={{
            height: "80vh",
            width: "480px",
            display: "flex",
            flexDirection: "column",
            bgcolor: "var(--white-second)",
            position: "fixed",
            right: "40px",
            bottom: "40px",
            borderRadius: "10px",
            zIndex: 2,
            fontSize: "16px",
            boxShadow: "rgba(0, 0, 0, 0.65) 0px 5px 15px",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              marginTop: 0,
              borderBottom: "2px solid var(--color-main)",
              bgcolor: "var(--color-main)",
              position: "relative",
              minHeight: "80px",
              height:'fit-content',
              display: "flex",
              flexDirection: "column",
              paddingLeft:'20px',
              color: 'var(--white)'
            }}
            component="div"
          >
            {user ? <h4>Xin chào {user.displayName}</h4> : <SignIn />}
            <a
              href="https://chat.zalo.me/index.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{color: 'white'}}
            >
              Kết nối qua zalo: 0377241628
            </a>
            <IconButton
              sx={{
                position: "absolute",
                right: 0,
              }}
              onClick={() => setClose(true)}
            >
              <Close />
            </IconButton>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              overflow: "auto",
              p: 2,
              borderBottom: "2px solid var(--color-main)",
            }}
          >
            {messages.map((message, index) => (
              <Message key={index} message={message} />
            ))}
          </Box>

          {/*  */}
          <SendMessage scroll={scroll} />
          <span ref={scroll}></span>
        </Box>
      )}
    </>
  );
};

export default ChatUI;
