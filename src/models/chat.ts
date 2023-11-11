export interface MessageDto {
    id?: string;
  userSend: string;
  userReceive: string;
  content: string;
  timestamp?: any;
}

export interface Chatbot {
  _id?: string;
  codeQuestion: string;
  question: string;
  response: string;
}