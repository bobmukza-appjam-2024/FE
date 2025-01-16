import { User } from "@/app/entities/user";
import React from "react";
import { Image, Text, View } from "react-native";

interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <View>
      <Image source={require("../../../images/profile.png")} />
      <Text>{user.nickname}</Text>
    </View>
  );
};

export default UserCard;
