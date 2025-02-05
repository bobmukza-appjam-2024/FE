import { API_URL } from "@/constants/url";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const submitLogin = (id: string, password: string) => {
  axios
    .post(`${API_URL}/auth/login`, {
      email: id,
      password: password,
    })
    .then((res) => {
      AsyncStorage.setItem("token", res.data.token);
    })
    .catch((e) => {
      console.log(e);
    });
};
