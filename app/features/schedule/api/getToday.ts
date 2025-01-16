import axios from "axios";

interface day {
  year: number;
  month: number;
  day: number;
}

const getToday = async ({ year, month, day }: day) => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}/schedules?year=${year}&month=${month}`,
    {
      headers: {
        // token
      },
    }
  );
  try {
    return res.data[day - 1];
  } catch (e) {
    console.log(e);
  }
};

export default getToday;
