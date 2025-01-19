import React, { useState } from "react";
import { View } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { Day } from "@/app/entities/day";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <View>
      <Calendar
        markedDates={{
          [selectedDate]: {
            selected: true,
            selectedColor: "#FFEE97",
            selectedTextColor: "white",
          },
        }}
        theme={{
          textDayStyle: { color: "#588C73" },
        }}
        hideArrows={true}
        hideDayNames={false}
        style={{
          borderWidth: 1,
          borderColor: "#588C73",
          borderRadius: 20,
          padding: 10,
        }}
        locale="ko"
        onDayPress={(d: Day) => {
          AsyncStorage.setItem("selectedDate", d.dateString);
          setSelectedDate(d.dateString);
        }}
      />
    </View>
  );
};

export default ShowToday;
