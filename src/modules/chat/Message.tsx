"use client";
import { Avatar, Box, Paper, Tooltip, Typography } from "@mui/material";
import moment from "moment";
import React from "react";
import { MessageDto } from "~/models/chat";
import { formatTimestamp } from "./function";

interface MessageProps {
  message: MessageDto;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const isBot = message.userSend === "admin";

  return (
    <Tooltip
      title={formatTimestamp({
        nanoseconds: message.timestamp?.nanoseconds ?? 0,
        seconds: message.timestamp?.seconds ?? 0,
      })}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: isBot ? "flex-start" : "flex-end",
          mb: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: isBot ? "row" : "row-reverse",
            paddingRight: isBot ? "100px" : "4px",
            paddingLeft: isBot ? "4px" : "100px",

            alignItems: "center",
          }}
        >
          <Avatar sx={{ bgcolor: isBot ? "#bc9af4" : "#67ccd1" }}>
            {isBot ? "👦" : "😊"}
          </Avatar>
          <Paper
            variant="outlined"
            sx={{
              p: 1,
              ml: isBot ? 1 : 0,
              mr: isBot ? 0 : 1,
              backgroundColor: isBot ? "#bc9af4" : "#67ccd1",
              borderRadius: isBot ? "20px 20px 20px 5px" : "20px 20px 5px 20px",
              border: "1px solid var(--black)",
            }}
          >
            <Typography variant="body1">{message.content}</Typography>
          </Paper>
        </Box>
      </Box>
    </Tooltip>
  );
};

export default Message;
