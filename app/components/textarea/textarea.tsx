import React from "react";
import * as S from "./styles";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

interface TextareaProps {
  label: string;
  placeholder?: string;
  setValue: (value: string) => void;
}

const Textarea = ({ label, placeholder, setValue }: TextareaProps) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <S.Container>
        <S.Label>{label}</S.Label>
        <S.InputStyle
          multiline
          onChangeText={(text: string) => setValue(text)}
          placeholder={placeholder}
          accessibilityLabel={label}
        />
      </S.Container>
    </TouchableWithoutFeedback>
  );
};

export default Textarea;
