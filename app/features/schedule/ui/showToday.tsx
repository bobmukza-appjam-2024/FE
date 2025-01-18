import { useEffect, useState } from "react";
import getToday from "../api/getToday";
import { View } from "react-native";

const ShowToday = async () => {
  const [day, setDay] = useState({ year: 2025, month: 1, day: 1 });
  const schedule = await getToday({ year: 2025, month: 1, day: 1 });
  useEffect(() => {}, [schedule]);
  return <View></View>;
};

export default ShowToday;
