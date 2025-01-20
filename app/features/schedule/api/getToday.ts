import axios from "axios";
import { getSelected } from "../store/getSelectedDay";
import { Schedule } from "@/app/entities/schedule";

const getToday = async (): Promise<Schedule | undefined> => {
  const selected = await getSelected();
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}/schedules?year=${
      selected?.split("-")[0]
    }&month=${selected?.split("-")[1]}`,
    {
      headers: {
        // token
      },
    }
  );
  try {
    return res.data.schedule[selected ? selected.split("-")[0] : 1];
  } catch (e) {
    console.log(e);
  }
};

export default getToday;
