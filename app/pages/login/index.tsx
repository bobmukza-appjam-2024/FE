import ShowInputs from "@/app/features/login/ui/showInputs";
import * as S from "./styles";

export default function LoginPage() {
  return (
    <S.Container>
      <ShowInputs />
      <S.회원아님Wrapper>
        <S.회원가입Text1>회원이 아니신가요?</S.회원가입Text1>
        <S.회원가입Text2>회원가입</S.회원가입Text2>
      </S.회원아님Wrapper>
    </S.Container>
  );
}
