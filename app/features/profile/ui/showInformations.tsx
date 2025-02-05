import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Text, ActivityIndicator, View } from "react-native";
import { getProfile } from "../api/getProfile";
import ProfileIcon from "@/app/svgs/profile";
import { Profile } from "@/app/entities/profile";
import Edit from "@/app/svgs/edit";
import * as S from "./styles";
import { TouchableOpacity } from "react-native";

const ShowInformations = () => {
  const R = useRouter();
  const [profile, setProfile] = useState<Profile | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profile = await getProfile();
        setProfile(profile);
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  if (loading) {
    return (
      <S.Container>
        <ActivityIndicator size="large" color="#0000ff" />
      </S.Container>
    );
  }

  if (!profile) {
    return (
      <S.Container>
        <Text>프로필을 불러오는 데 실패했습니다.</Text>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.InformCotainer>
        <S.firstContainer>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <ProfileIcon />
            <Text style={{ marginTop: 10 }}>
              {profile?.nickname || "닉네임 없음"}
            </Text>
          </View>
          <TouchableOpacity onPress={() => R.push("/pages/editProfile")}>
            <Edit />
          </TouchableOpacity>
        </S.firstContainer>
        <S.introduction>
          내 소개: {profile?.introduction || "소개 없음"}
        </S.introduction>
      </S.InformCotainer>
      <S.InformCotainer>
        <S.firstContainer>
          <S.favorite>취향</S.favorite>
        </S.firstContainer>
        <S.favoriteText>
          {profile?.favoriteMenus?.[0] || "취향 없음"}
        </S.favoriteText>
      </S.InformCotainer>
    </S.Container>
  );
};

export default ShowInformations;
