import { Profile } from "@/app/entities/profile";
import { API_URL } from "@/constants/url";
import axios from "axios";
import { getToken } from "../../login/api/getToken";

export async function getProfile(): Promise<Profile | undefined> {
  try {
    const response = await axios.get(`${API_URL}/profile`, {
      headers: {
        Authorization: "Bearer " + (await getToken()),
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
