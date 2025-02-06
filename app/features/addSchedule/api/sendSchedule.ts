import { Schedule } from "@/app/entities/schedule";
import { API_URL } from "@/constants/url";
import axios from "axios";
import { getToken } from "../../login/api/getToken";

const sendSchedule = async ({
  content,
  menuName,
  location,
  date,
}: Schedule) => {
  axios
    .post(
      `${API_URL}/schedules`,
      {
        content: content,
        menuName: menuName,
        location: location,
        date: date.split(" ")[0],
        mealTime: "점심",
      },
      {
        headers: {
          Authorization: "Bearer " + (await getToken()),
        },
      }
    )
    .catch((e) => {
      console.log(e);
    });
};

export default sendSchedule;
