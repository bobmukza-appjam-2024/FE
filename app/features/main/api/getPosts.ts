import { API_URL } from "@/constants/url";
import axios from "axios";
import { getToken } from "../../login/api/getToken";
import { PostType } from "@/app/entities/post";

interface GetPostsParams {
  page: number;
  mealTime?: string;
}

export const getPosts = async ({
  page,
  mealTime,
}: GetPostsParams): Promise<void | PostType[]> => {
  axios
    .get(`${API_URL}/posts?page=${page}&size=${3}&mealTime=${mealTime}`, {
      headers: {
        Authorization: `Bearer ${await getToken()}`,
      },
    })
    .then((res) => {
      return res.data.posts;
    })
    .catch((err) => {
      console.error(err);
      return null;
    });
};
