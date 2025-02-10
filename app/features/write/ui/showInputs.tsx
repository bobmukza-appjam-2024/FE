import Button from "@/app/components/button/button";
import Input from "@/app/components/input/input";
import Textarea from "@/app/components/textarea/textarea";
import { useState } from "react";
import { View } from "react-native";
import { submitPost } from "../api/submitPost";
import { useRouter } from "expo-router";

const ShowInputs = () => {
  const R = useRouter();
  const [form, setForm] = useState({
    title: "",
    content: "",
    mealTime: "",
    location: "",
    menuName: "",
  });

  const handleChange = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <View style={{ gap: 20 }}>
      <Input
        label="제목"
        setValue={(value) => handleChange("title", value)}
        placeholder="제목을 입력해주세요"
      />
      <Input
        label="메뉴명"
        setValue={(value) => handleChange("menuName", value)}
        placeholder="메뉴명을 입력해주세요"
      />
      <Input
        label="식사 시간"
        setValue={(value) => handleChange("mealTime", value)}
        placeholder="식사 시간을 입력해주세요"
      />
      <Input
        label="장소"
        setValue={(value) => handleChange("location", value)}
        placeholder="장소를 입력해주세요"
      />
      <Textarea
        label="추가 사항"
        placeholder="추가 사항을 입력해주세요"
        setValue={(value) => handleChange("content", value)}
      />
      <Button
        func={() => {
          submitPost(
            form.title,
            form.content,
            form.mealTime,
            form.location,
            form.menuName
          );
          R.push("/pages/main");
        }}
        label="생성하기"
      />
    </View>
  );
};

export default ShowInputs;
