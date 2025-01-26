import { Schedule } from "@/app/entities/schedule";
import axios from "axios";
import { useRouter } from "expo-router";

const sendSchedule = ({
  content,
  menuName,
  location,
  date,
}: Schedule): void => {
  const R = useRouter();
  axios
    .post(
      `${process.env.API_URL}/schedule`,
      {
        content: content,
        menuName: menuName,
        location: location,
        date: date,
        mealTime: "점심",
      },
      {
        headers: {
          // token
        },
      }
    )
    .then(() => {
      alert("일정이 추가되었습니다.");
      R.push("/pages/schedule");
    })
    .catch((e) => {
      console.log(e);
    });
};

export default sendSchedule;
