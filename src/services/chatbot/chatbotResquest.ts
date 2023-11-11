import axiosInstance from "~/lib/utils/axiosInstance";

export const chatbotRequest = {
  getResponse: async function (codeQuestion: string) {
    try {
      let url = `/chatbot/${codeQuestion}`;
      let res = await axiosInstance.get(url);
      return res.data.chatbot.response;
    } catch (err) {
      console.log(err);
      return err.data.message;
    }
  },
};
