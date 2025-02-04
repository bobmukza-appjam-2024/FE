import axios from "axios";
import { useRouter } from "expo-router";

export const submitPost = (
  title: string,
  content: string,
  mealTime: string,
  location: string,
  menuName: string
) => {
  const R = useRouter();
  axios
    .post(
      `${process.env.REACT_APP_API_URL}/post`,
      {
        title: title,
        content: content,
        mealTime: mealTime,
        location: location,
        menuName: menuName,
        preferredAge: 20,
        preferredGender: "여자",
      },
      {
        headers: {
          // 토큰
        },
      }
    )
    .then(() => {
      R.push("/pages/main");
    })
    .catch((e) => {
      console.log(e);
    });
};
