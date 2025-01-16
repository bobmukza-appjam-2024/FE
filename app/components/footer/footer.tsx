import * as S from "./styles";
import Schedule from "@/app/svgs/schedule";
import Home from "@/app/svgs/home";
import Chat from "@/app/svgs/chat";
import MyPage from "@/app/svgs/myPage";

export default function Footer() {
  return (
    <S.Footer>
      <S.Wrapper>
        <Home />
        <S.Text>홈</S.Text>
      </S.Wrapper>
      <S.Wrapper>
        <Schedule />
        <S.Text>일정</S.Text>
      </S.Wrapper>
      <S.Wrapper>
        <Chat />
        <S.Text>채팅</S.Text>
      </S.Wrapper>
      <S.Wrapper>
        <MyPage />
        <S.Text>마이페이지</S.Text>
      </S.Wrapper>
    </S.Footer>
  );
}
