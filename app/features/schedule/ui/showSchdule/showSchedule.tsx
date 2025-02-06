import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { getToday } from "../../api/getToday";
import { Schedule } from "@/app/entities/schedule";
import * as S from "./styles";

const ShowSchedule = () => {
  const [schedule, setSchedule] = useState<Schedule | null>(null);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const schedules = await getToday();
        if (schedules) {
          setSchedule(schedules);
        }
      } catch (error) {
        console.error("Error fetching schedule:", error);
      }
    };
    fetchSchedule();
  }, []);

  return (
    <S.Container>
      {schedule ? (
        <View>
          <Text>{schedule.date}</Text>
          <S.ScheduleText>
            <Text>{`${schedule.location}에서 ${schedule.menuName} 밥묵기`}</Text>
          </S.ScheduleText>
        </View>
      ) : (
        <S.NoSchedule>아쉽지만 오늘의 일정은 없어요</S.NoSchedule>
      )}
    </S.Container>
  );
};

export default ShowSchedule;
