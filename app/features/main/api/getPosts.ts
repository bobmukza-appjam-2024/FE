import { API_URL } from "@/constants/url";
import axios from "axios";
import { getToken } from "../../login/api/getToken";
import { Post } from "@/app/entities/post";

interface GetPostsParams {
  page: number;
  mealTime?: string;
}

export const getPosts = ({ page, mealTime }: GetPostsParams): Post | void => {
  axios
    .get(`${API_URL}/posts?page=${page}&size=${3}&mealTime=${mealTime}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(err);
    });
};
