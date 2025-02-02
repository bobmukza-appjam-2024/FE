import { User } from "@/app/entities/user";
import axios from "axios";

export async function getUserList(): Promise<User[]> {
  return await axios
    .get(`${process.env.REACT_APP_API_URL}/chats`, {
      headers: {
        // 토큰
      },
    })
    .then((res) => {
      return res.data;
    });
}
