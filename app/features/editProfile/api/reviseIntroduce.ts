import axios from "axios";

interface reviseIntroduceProps {
  nickname: "string";
  introduce: string;
  favoriteMenus: ["string"];
}

const reviseIntroduce = ({
  nickname,
  introduce,
  favoriteMenus,
}: reviseIntroduceProps) => {
  axios.put(
    `${process.env.URL}/profile`,
    {
      nickname: nickname,
      introduce: introduce,
      favoriteMenus: favoriteMenus,
    },
    {
      headers: {
        // 토큰
      },
    }
  );
};

export default reviseIntroduce;
