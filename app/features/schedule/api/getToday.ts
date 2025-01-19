import axios from "axios";
import { getSelected } from "../store/getSelectedDay";

const getToday = async () => {
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
    return res.data[selected ? selected.split("-")[0] : 1];
  } catch (e) {
    console.log(e);
  }
};

export default getToday;
