import Button from "@/app/components/button/button";
import Textarea from "@/app/components/textarea/textarea";
import { useState } from "react";
import { View } from "react-native";
import reviseIntroduce from "../api/reviseIntroduce";
import Input from "@/app/components/input/input";

const ReviseProfile = () => {
  const [nickname, setNickname] = useState<string>("");
  const [introduction, setIntroduction] = useState<string>("");
  const [favorite, setFavorite] = useState<string>("");
  return (
    <View>
      <Input
        label="이름"
        placeholder="이름을 입력해주세요"
        setValue={setNickname}
      />
      <Input
        label="취향"
        placeholder="취향을 입력해주세요"
        setValue={setFavorite}
      />
      <Textarea
        label="My 소개글"
        placeholder="소개글을 입력해주세요"
        setValue={setIntroduction}
      />
      <Button
        func={reviseIntroduce}
        arg={[introduction, favorite, nickname]}
        label="수정하기"
      />
    </View>
  );
};
export default ReviseProfile;
