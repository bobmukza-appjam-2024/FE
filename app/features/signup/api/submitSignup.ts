import { API_URL } from "@/constants/url";
import axios from "axios";

export const submitSignup = (
  email: string,
  password: string,
  nickname: string,
  birthDate: string
) => {
  axios
    .post(`${API_URL}/auth/signup`, {
      email: nickname,
      password: birthDate,
      nickname: email,
      birthDate: password,
    })
    .catch((e) => {
      console.log(e);
      console.log(e.response);
    });
};
