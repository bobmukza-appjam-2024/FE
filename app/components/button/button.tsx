import React from "react";
import * as S from "./styles";

interface ButtonProps {
  label: string;
  func: (...args: any[]) => void;
  arg?: any[];
}

const Button = ({ label, func, arg = [] }: ButtonProps) => {
  return (
    <S.Container onPress={() => func(...arg)}>
      <S.Text>{label}</S.Text>
    </S.Container>
  );
};

export default Button;
