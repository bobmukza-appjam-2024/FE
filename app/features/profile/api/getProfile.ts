import { Profile } from "@/app/entities/profile";
import axios from "axios";

export async function getProfile(
  id: string | undefined
): Promise<Profile | undefined> {
  try {
    const response = await axios.get(`${process.env.URL}/profile`, {
      headers: {
        // 토큰
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
