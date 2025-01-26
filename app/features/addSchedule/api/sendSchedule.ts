import { Schedule } from "@/app/entities/schedule";
import axios from "axios";
import { useRouter } from "expo-router";

const R = useRouter();

const sendSchedule = ({
  content,
  menuName,
  location,
  date,
}: Schedule): void => {
  axios
    .post(
      `${process.env.API_URL}/schedule`,
      {
        content: content,
        menuName: menuName,
        location: location,
        date: date,
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
