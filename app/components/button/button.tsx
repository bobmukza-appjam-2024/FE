import * as S from "./styles";

interface ButtonProps {
  label: string;
  func: () => void;
}

const Button = ({ label, func }: ButtonProps) => {
  return (
    <S.Container onPress={func}>
      <S.Text>{label}</S.Text>
    </S.Container>
  );
};

export default Button;
