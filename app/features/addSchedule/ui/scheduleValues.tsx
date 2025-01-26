import React, { useState } from "react";
import { View, Text } from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import Input from "@/app/components/input/input";
import Textarea from "@/app/components/textarea/textarea";
import Button from "@/app/components/button/button";
import sendSchedule from "../api/sendSchedule";

const ScheduleValues: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [lo, setLo] = useState<string>("");
  const [food, setFood] = useState<string>("");
  const [add, setAdd] = useState<string>("");

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  return (
    <View>
      <View>
        <Text style={{ color: "#6E6e6e", margin: 10, fontSize: 14 }}>날짜</Text>
        <DateTimePicker
          value={date}
          mode="datetime"
          display="default"
          onChange={onChange}
          locale="ko"
        />
      </View>
      <Input setValue={setLo} label="장소" placeholder="장소를 입력해주세요" />
      <Input
        setValue={setFood}
        label="음식 종류"
        placeholder="음식 종류를 입력해주세요"
      />
      <Textarea
        label="추가 사항"
        setValue={setAdd}
        placeholder="추가 사항를 입력해주세요"
      />
      <Button label="생성하기" func={sendSchedule} />
    </View>
  );
};

export default ScheduleValues;
