import axios from "axios";
import { getSelected } from "../store/getSelectedDay";
import { Schedule } from "@/app/entities/schedule";
import { API_URL } from "@/constants/url";
import { getToken } from "../../login/api/getToken";

export const getToday = async (): Promise<Schedule | undefined> => {
  const selected = await getSelected();
  console.log("Selected date:", selected);
  try {
    const res = await axios.get(
      `${API_URL}/schedules?year=${selected?.split("-")[0]}&month=${
        selected?.split("-")[1]
      }`,
      {
        headers: {
          Authorization: "Bearer " + (await getToken()),
        },
      }
    );
    return res.data.schedule[selected ? selected.split("-")[0] : 1];
  } catch (e) {
    console.error("Error fetching today's schedule:", e);
    return undefined;
  }
};
