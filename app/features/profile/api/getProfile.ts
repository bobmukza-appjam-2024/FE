import axios from "axios";

const getProfile = async () => {
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
};

export default getProfile;
