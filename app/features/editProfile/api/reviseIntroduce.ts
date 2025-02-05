import axios from "axios";
import { getToken } from "../../login/api/getToken";
import { API_URL } from "@/constants/url";

interface reviseIntroduceProps {
  nickname: string;
  introduction: string;
  favorite: string;
}

const reviseIntroduce = async ({
  nickname,
  introduction,
  favorite,
}: reviseIntroduceProps) => {
  axios.put(
    `${API_URL}/profile`,
    {
      nickname: nickname,
      introduce: introduction,
      favoriteMenus: [favorite],
    },
    {
      headers: {
        Authorization: `Bearer ${await getToken()}`,
      },
    }
  );
};

export default reviseIntroduce;
