import { User } from "@/app/entities/user";
import ProfileIcon from "@/app/svgs/profile";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";

interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        padding: 10,
      }}
      onPress={() => {
        router.push({
          pathname: "/pages/chating/[id]",
          params: { id: user.id },
        });
      }}
    >
      <ProfileIcon />
      <Text style={{ fontWeight: 600 }}>{user.nickname}</Text>
    </TouchableOpacity>
  );
};

export default UserCard;
