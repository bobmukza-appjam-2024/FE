import React, { useState } from "react";
import { View, Text } from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

const MyDateTimePicker: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());

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
    </View>
  );
};

export default MyDateTimePicker;
