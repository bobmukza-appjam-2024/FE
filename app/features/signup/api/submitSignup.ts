import axios from "axios";
import { useRouter } from "expo-router";

export const submitSignup = (
  email: string,
  password: string,
  nickname: string,
  birthDate: string
) => {
  axios
    .post(`${process.env.REACT_APP_API_URL}/auth/signup`, {
      email: email,
      password: password,
      nickname: nickname,
      birthDate: birthDate,
    })
    .catch((e) => {
      console.log(e);
    });
};
