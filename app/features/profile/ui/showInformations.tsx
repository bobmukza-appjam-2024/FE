import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { getProfile } from "../api/getProfile";
import ProfileIcon from "@/app/svgs/profile";
import { Profile } from "@/app/entities/profile";
import Edit from "@/app/svgs/edit";

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
    <View>
      <View>
        <View>
          <ProfileIcon />
          <Text>{profile?.nickname}</Text>
          <Edit />
        </View>
        <View>
          <Text>{profile?.introduction}</Text>
        </View>
      </View>
      <View>
        <View>
          <Text>취향</Text>
          <Edit />
        </View>
        <View>
          <Text>{profile?.favoriteMenus[0]}</Text>
        </View>
      </View>
    </View>
  );
};

export default ShowInformations;
