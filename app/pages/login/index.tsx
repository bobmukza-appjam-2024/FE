import ShowInputs from "@/app/features/login/ui/showInputs";
import * as S from "./styles";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function LoginPage() {
  return (
    <S.Container>
      <S.Title>로그인</S.Title>
      <ShowInputs />
      <S.회원아님Wrapper>
        <S.회원가입Text1>회원이 아니신가요?</S.회원가입Text1>
        <TouchableOpacity onPress={() => useRouter().push("/pages/signup")}>
          <S.회원가입Text2>회원가입</S.회원가입Text2>
        </TouchableOpacity>
      </S.회원아님Wrapper>
    </S.Container>
  );
}
