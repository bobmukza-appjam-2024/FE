import { Chat } from "@/app/entities/chat";
import axios from "axios";
import { getToken } from "../../login/api/getToken";
import { API_URL } from "@/constants/url";

export const getMessage = async (id: string): Promise<Chat[]> => {
  return await axios
    .get(`${API_URL}/chats/${id}/messages`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })
    .then((res) => {
      return res.data.messages;
    })
    .catch((err) => {
      console.log(err);
    });
};
