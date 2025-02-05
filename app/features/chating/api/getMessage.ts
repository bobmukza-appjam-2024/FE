import { Chat } from "@/app/entities/chat";
import axios from "axios";

export const getMessage = async (id: string): Promise<Chat[]> => {
  return await axios
    .get(`${process.env.API_URL}/chats/${id}/messages`, {
      headers: {
        // 토큰
      },
    })
    .then((res) => {
      return res.data.messages;
    })
    .catch((err) => {
      console.log(err);
    });
};
