import axios from "axios";

export const getMessage = async (id: string) => {
  return await axios
    .get(`${process.env.API_URL}/chats/${id}/messages`, {
      headers: {
        // 토큰
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
