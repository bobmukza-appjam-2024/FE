import Edit from "@/app/svgs/edit";
import Write from "@/app/svgs/write";
import { useRouter } from "expo-router";
import { Text } from "react-native";
import * as S from "./styles";

const Modal = () => {
  const R = useRouter();
  return (
    <S.Container>
      <S.Wrapper onPress={() => R.push("/pages/addSchedule")}>
        <Text>작성하기</Text>
        <Write />
      </S.Wrapper>
      <S.Wrapper onPress={() => R.push("/pages/addSchedule")}>
        <Text>수정하기</Text>
        <Edit />
      </S.Wrapper>
    </S.Container>
  );
};

export default Modal;
