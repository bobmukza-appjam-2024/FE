import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import getToday from "../../api/getToday";
import { Schedule } from "@/app/entities/schedule";

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
    <View>
      {schedule ? (
        <View>
          <Text>{schedule.date}</Text>
          <Text>{schedule.content}</Text>
        </View>
      ) : (
        <Text>아쉽지만 오늘의 일정은 없어요</Text>
      )}
    </View>
  );
};

export default ShowSchedule;
