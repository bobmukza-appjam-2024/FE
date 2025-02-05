import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Text } from "react-native";
import { getProfile } from "../api/getProfile";
import ProfileIcon from "@/app/svgs/profile";
import { Profile } from "@/app/entities/profile";
import Edit from "@/app/svgs/edit";
import * as S from "./styles";
import { TouchableOpacity } from "react-native";

const ShowInformations = () => {
  const R = useRouter();
  const [profile, setProfile] = useState<Profile | undefined>(undefined);
  const { id } = useLocalSearchParams<{ id?: string }>();
  useEffect(() => {
    if (!id) return;
    const fetchProfile = async () => {
      try {
        const profile = await getProfile(id);
        setProfile(profile);
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
          <TouchableOpacity onPress={() => R.push("/pages/editProfile")}>
            <Edit />
          </TouchableOpacity>
        </S.firstContainer>
        <S.introduction>내 소개: {profile?.introduction}</S.introduction>
      </S.InformCotainer>
      <S.InformCotainer>
        <S.firstContainer>
          <S.favorite>취향</S.favorite>
          <TouchableOpacity onPress={() => R.push("/pages/editProfile")}>
            <Edit />
          </TouchableOpacity>
        </S.firstContainer>
        <S.favoriteText>{profile?.favoriteMenus[0]}</S.favoriteText>
      </S.InformCotainer>
    </S.Container>
  );
};

export default ShowInformations;
