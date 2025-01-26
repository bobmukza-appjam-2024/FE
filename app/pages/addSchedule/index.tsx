import MyDateTimePicker from "@/app/features/addSchedule/ui/dateSelecter";
import { View } from "react-native";
import * as S from "./styles";

export default function AddSchedulePage() {
  return (
    <S.Container>
      <MyDateTimePicker />
    </S.Container>
  );
}
