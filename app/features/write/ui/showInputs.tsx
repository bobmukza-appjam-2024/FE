import Button from "@/app/components/button/button";
import Input from "@/app/components/input/input";
import Textarea from "@/app/components/textarea/textarea";
import { useState } from "react";
import { View } from "react-native";
import { submitPost } from "../api/submitPost";

const ShowInputs = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [mealTime, setMealTime] = useState("");
  const [location, setLocation] = useState("");
  const [menuName, setMenuName] = useState("");
  return (
    <View>
      <Input
        label="제목"
        setValue={setTitle}
        placeholder="제목을 입력해주세요"
      />
      <Input
        label="메뉴명"
        setValue={setMenuName}
        placeholder="메뉴명을 입력해주세요"
      />
      <Input
        label="식사 시간"
        setValue={setMealTime}
        placeholder="식사 시간을 입력해주세요"
      />
      <Input
        label="장소"
        setValue={setLocation}
        placeholder="장소를 입력해주세요"
      />
      <Textarea
        label="추가 사항"
        placeholder="추가 사항을 입력해주세요"
        setValue={setContent}
      />
      <Button
        func={submitPost}
        label="생성하기"
        arg={[title, content, mealTime, location, menuName]}
      />
    </View>
  );
};

export default ShowInputs;
