import ShowToday from "@/app/features/schedule/ui/showToday/showToday";
import * as S from "./styles";
import ShowSchedule from "@/app/features/schedule/ui/showSchdule/showSchedule";

export default function SchedulePage() {
  return (
    <S.Container>
      <S.Title>오늘의 일정</S.Title>
      <ShowSchedule />
      <ShowToday />
    </S.Container>
  );
}
