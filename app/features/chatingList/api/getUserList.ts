import { User } from "@/app/entities/user";
import { API_URL } from "@/constants/url";
import axios from "axios";
import { getToken } from "../../login/api/getToken";

export async function getUserList(): Promise<User[]> {
  return await axios
    .get(`${API_URL}/chats`, {
      headers: {
        Authorization: "Bearer " + (await getToken()),
      },
    })
    .then((res) => {
      return res.data;
    });
}
