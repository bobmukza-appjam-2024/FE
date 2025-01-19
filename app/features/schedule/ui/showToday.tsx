import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import getToday from "../api/getToday";
import { Day } from "@/app/entities/day";

LocaleConfig.locales["ko"] = {
  monthNames: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  monthNamesShort: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  dayNames: [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ],
  dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
  today: "오늘",
};
LocaleConfig.defaultLocale = "ko";

const ShowToday = () => {
  const [day, setDay] = useState({ year: 2025, month: 1, day: 1 });
  const [schedule, setSchedule] = useState({});

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const fetchedSchedule = await getToday(day);
        setSchedule(fetchedSchedule);
      } catch (error) {
        console.error("Error fetching schedule:", error);
      }
    };

    fetchSchedule();
  }, [day]);

  return (
    <View>
      <Calendar
        hideArrows={true}
        style={{
          borderWidth: 1,
          borderColor: "#588C73",
        }}
        locale="ko"
        onDayPress={(d: Day) => {
          setDay({
            year: d.year,
            month: d.month,
            day: d.day,
          });
        }}
      />
    </View>
  );
};

export default ShowToday;
