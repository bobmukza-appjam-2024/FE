import { useEffect, useState } from "react";
import { PostType } from "@/app/entities/post";
import { getPosts } from "../api/getPosts";
import * as S from "./styles";
import Post from "@/app/components/post/post";

const ShowPosts = () => {
  const [morningPost, setMorningPost] = useState<PostType[]>([]);
  const [lunchPost, setLunchPost] = useState<PostType[]>([]);
  const [dinnerPost, setDinnerPost] = useState<PostType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const morning = await getPosts({ page: 1, mealTime: "아침" });
      const lunch = await getPosts({ page: 1, mealTime: "점심" });
      const dinner = await getPosts({ page: 1, mealTime: "저녁" });

      setMorningPost(morning ?? []);
      setLunchPost(lunch ?? []);
      setDinnerPost(dinner ?? []);
    };

    fetchData();
  }, []);

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>아침</S.Title>
        {morningPost.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </S.Wrapper>
      <S.Wrapper>
        <S.Title>점심</S.Title>
        {lunchPost.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </S.Wrapper>
      <S.Wrapper>
        <S.Title>저녁</S.Title>
        {dinnerPost.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </S.Wrapper>
    </S.Container>
  );
};

export default ShowPosts;
