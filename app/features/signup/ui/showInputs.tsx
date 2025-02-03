import Button from "@/app/components/button/button";
import Input from "@/app/components/input/input";
import { useState } from "react";
import { View } from "react-native";
import { submitSignup } from "../api/submitSignup";

const ShowInputs = () => {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
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
      <Button
        label="회원가입"
        arg={[name, birthDate, id, password]}
        func={submitSignup}
      />
    </View>
  );
};

export default ShowInputs;
