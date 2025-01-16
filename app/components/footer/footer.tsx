import * as S from "./styles";

export default function Footer() {
  return (
    <S.Footer>
      <S.Wrapper>
        <S.Icon source={require("../../svgs/home")} />
        <S.Text>홈</S.Text>
      </S.Wrapper>
      <S.Wrapper>
        <S.Icon source={require("../../svgs/schedule")} />
        <S.Text>일정</S.Text>
      </S.Wrapper>
      <S.Wrapper>
        <S.Icon source={require("../../svgs/chat")} />
        <S.Text>채팅</S.Text>
      </S.Wrapper>
      <S.Wrapper>
        <S.Icon source={require("../../svgs/myPage")} />
        <S.Text>마이페이지</S.Text>
      </S.Wrapper>
    </S.Footer>
  );
}
