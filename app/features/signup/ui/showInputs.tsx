import Button from "@/app/components/button/button";
import Input from "@/app/components/input/input";
import { useState } from "react";
import { View } from "react-native";
import { submitSignup } from "../api/submitSignup";
import { useRouter } from "expo-router";

const ShowInputs = () => {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const R = useRouter();
  return (
    <View style={{ gap: 290 }}>
      <View style={{ gap: 20, marginBottom: 20 }}>
        <Input
          placeholder="이름을 입력해주세요"
          setValue={setName}
          label="이름"
        />
        <Input
          placeholder="생년월일을 입력해주세요 ex) 1999-01-01"
          setValue={setBirthDate}
          label="생년월일"
        />
        <Input
          placeholder="아이디를 입력해주세요"
          setValue={setId}
          label="아이디"
        />
        <Input
          placeholder="비밀번호를 입력해주세요"
          setValue={setPassword}
          label="비밀번호"
        />
      </View>
      <Button
        label="회원가입"
        func={() => {
          submitSignup(name, birthDate, id, password);
          R.push("/pages/login");
        }}
      />
    </View>
  );
};

export default ShowInputs;
