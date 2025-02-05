import Button from "@/app/components/button/button";
import Input from "@/app/components/input/input";
import { useState } from "react";
import { View } from "react-native";
import { submitLogin } from "../api/submitLogin";
import { useRouter } from "expo-router";

const ShowInputs = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const R = useRouter();
  return (
    <View style={{ gap: 420 }}>
      <View style={{ gap: 20 }}>
        <Input
          placeholder="아이디를 입력해주세요"
          setValue={setEmail}
          label="아이디"
        />
        <Input
          placeholder="비밀번호를 입력해주세요"
          setValue={setPassword}
          label="비밀번호"
        />
      </View>
      <Button
        label="로그인"
        func={() => {
          submitLogin(email, password);
          R.push("/pages/main");
        }}
      />
    </View>
  );
};

export default ShowInputs;
