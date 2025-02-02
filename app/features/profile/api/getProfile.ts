import axios from "axios";

export async function getProfile() {
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
