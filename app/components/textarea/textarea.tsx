import React from "react";
import * as S from "./styles";

interface TextareaProps {
  label: string;
  placeholder?: string;
  setValue: (value: string) => void;
}

const Textarea = ({ label, placeholder, setValue }: TextareaProps) => {
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

export default Textarea;
