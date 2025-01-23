import React from "react";
import { TextInput, Text, View } from "react-native";
import * as S from "./styles";

interface InputProps {
  label: string;
  placeholder?: string;
  setValue: (value: string) => void;
}

const Input = ({ label, placeholder, setValue }: InputProps) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.InputStyle
        onChangeText={(text: string) => setValue(text)}
        placeholder={placeholder}
        accessibilityLabel={label}
      />
    </S.Container>
  );
};

export default Input;
