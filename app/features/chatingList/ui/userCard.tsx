import { User } from "@/app/entities/user";
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
      onPress={() => {
        router.push({
          pathname: "/pages/chating/[id]/index",
          params: { id: user.id },
        });
      }}
    >
      <Image source={require("../../../svgs/profile")} />
      <Text>{user.nickname}</Text>
    </TouchableOpacity>
  );
};

export default UserCard;
