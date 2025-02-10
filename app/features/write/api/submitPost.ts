import axios from "axios";
import { getToken } from "../../login/api/getToken";
import { API_URL } from "@/constants/url";

export const submitPost = async (
  title: string,
  content: string,
  mealTime: string,
  location: string,
  menuName: string
) => {
  axios
    .post(
      `${API_URL}/posts`,
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
          Authorization: `Bearer ${await getToken()}`,
        },
      }
    )
    .then(() => {})
    .catch((e) => {
      console.log(e);
    });
};
