"use client";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { ButtonText } from "../global-styles/custom-mui";
import { Send } from "@mui/icons-material";
import { authFirebase, dbFirebase } from "~/lib/utils/firebaseInstance";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useAppSelector } from "~/lib/store/hook";
import { MessageDto } from "~/models/chat";
import { chatbotRequest } from "~/services/chatbot/chatbotResquest";

function SendMessage({ scroll }: { scroll: any }) {
  const [input, setInput] = useState<string>("");
  const auth = useAppSelector((state) => state.auth);

  async function sendResponse(codeQuestion: string) {
    const response = await chatbotRequest.getResponse(codeQuestion);
    let userReceive = auth.username;
    let messagePost: MessageDto = {
      content: response,
      userSend: "admin",
      userReceive: userReceive,
      timestamp: serverTimestamp(),
    };
    await addDoc(collection(dbFirebase, "chats"), {
      ...messagePost,
    });
  }

  async function handleSend(e: any) {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a valid message");
      return;
    }
    let userSend = auth.username;
    let userReceive = "admin";
    if (auth.role == "1912") {
      let tmp = userSend;
      userSend = userReceive;
      userReceive = tmp;
    }
    let messagePost: MessageDto = {
      content: input,
      userSend: userSend,
      userReceive: userReceive,
      timestamp: serverTimestamp(),
    };
    await addDoc(collection(dbFirebase, "chats"), {
      ...messagePost,
    });
    setTimeout(() => {
      sendResponse(input);
    }, 1000);
    // alert(JSON.stringify(messagePost));
    setInput("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }

  const handleInputChange = (event: any) => {
    setInput(event.target.value);
  };

  return (
    <Box sx={{ p: 2, backgroundColor: "background.default" }}>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <FormControl fullWidth>
            <InputLabel id="form-chatbot">Câu hỏi tự động</InputLabel>
            <Select
              labelId="form-chatbot"
              value={input}
              label="Age"
              onChange={handleInputChange}
            >
              <MenuItem value={""}></MenuItem>
              <MenuItem value={"question1"}>cách tính phí ship?</MenuItem>
              <MenuItem value={"question2"}>cách tính phí ship?</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <ButtonText
            onClick={handleSend}
            sx={{ color: "var(--color-main)", height: "100%" }}
          >
            <Send />
          </ButtonText>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SendMessage;
