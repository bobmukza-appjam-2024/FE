import * as S from "./styles";
import Schedule from "@/app/svgs/schedule";
import Home from "@/app/svgs/home";
import Chat from "@/app/svgs/chat";
import MyPage from "@/app/svgs/myPage";
import { useRouter } from "expo-router";

export default function Footer() {
  const r = useRouter();
  return (
    <S.Footer>
      <S.Wrapper onPress={() => r.push("/pages/main")}>
        <Home />
        <S.Text>홈</S.Text>
      </S.Wrapper>
      <S.Wrapper onPress={() => r.push("/pages/schedule")}>
        <Schedule />
        <S.Text>일정</S.Text>
      </S.Wrapper>
      <S.Wrapper onPress={() => r.push("/pages/chatingList")}>
        <Chat />
        <S.Text>채팅</S.Text>
      </S.Wrapper>
      <S.Wrapper onPress={() => r.push("/pages/profile")}>
        <MyPage />
        <S.Text>마이페이지</S.Text>
      </S.Wrapper>
    </S.Footer>
  );
}
