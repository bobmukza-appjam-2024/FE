import { User } from "@/app/entities/user";
import { API_URL } from "@/constants/url";
import axios from "axios";
import { getToken } from "../../login/api/getToken";

export async function getUserList(): Promise<User[]> {
  try {
    const token = await getToken();
    const response = await axios.get(`${API_URL}/chats`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    return Array.isArray(response.data.users) ? response.data.users : [];
  } catch (error) {
    console.error("Error fetching user list:", error);
    return [];
  }
}
