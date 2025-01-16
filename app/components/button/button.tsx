import * as S from "./styles";

const Button = (label: string, func: () => void) => {
  return (
    <S.Container onPress={func}>
      <S.Text>{label}</S.Text>
    </S.Container>
  );
};

export default Button;
