import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { getProfile } from "../api/getProfile";
import ProfileIcon from "@/app/svgs/profile";
import { Profile } from "@/app/entities/profile";
import Edit from "@/app/svgs/edit";
import * as S from "./styles";

const ShowInformations = () => {
  const [profile, setProfile] = useState<Profile | undefined>(undefined);
  const { id } = useLocalSearchParams<{ id?: string }>();
  useEffect(() => {
    if (!id) return;
    const fetchProfile = async () => {
      try {
        const profile = await getProfile(id);
        console.log(profile);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchProfile();
  }, [id]);

  return (
    <S.Container>
      <S.InformCotainer>
        <S.firstContainer>
          <ProfileIcon />
          <Text>{profile?.nickname}</Text>
          <Edit />
        </S.firstContainer>
        <S.introduction>내 소개: {profile?.introduction}</S.introduction>
      </S.InformCotainer>
      <S.InformCotainer>
        <S.firstContainer>
          <S.favorite>취향</S.favorite>
          <Edit />
        </S.firstContainer>
        <S.favoriteText>{profile?.favoriteMenus[0]}</S.favoriteText>
      </S.InformCotainer>
    </S.Container>
  );
};

export default ShowInformations;
