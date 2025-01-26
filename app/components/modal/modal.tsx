import Edit from "@/app/svgs/edit";
import Write from "@/app/svgs/write";
import { useRouter } from "expo-router";
import * as S from "./styles";

interface ModalProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const Modal = ({ visible, setVisible }: ModalProps) => {
  const R = useRouter();
  if (!visible) return null;
  return (
    <S.LargeContainer onPress={() => setVisible(false)}>
      <S.Container>
        <S.Wrapper
          onPress={() => {
            R.push("/pages/addSchedule");
            setVisible(false);
          }}
        >
          <S.Text>작성하기</S.Text>
          <Write />
        </S.Wrapper>
        <S.Wrapper2
          onPress={() => {
            R.push("/pages/addSchedule");
            setVisible(false);
          }}
        >
          <S.Text>수정하기</S.Text>
          <Edit />
        </S.Wrapper2>
      </S.Container>
    </S.LargeContainer>
  );
};

export default Modal;
