import axios from "axios";

const API_KEY = "0634035752msh38bdeff228aaebfp1cf43fjsn856e99593a54";

export const getHistory = async ({ country = "usa", day }) => {
  let params = {
    country,
  };

  if (day) {
    params.day = day;
  }

  const options = {
    method: "GET",
    url: "https://covid-193.p.rapidapi.com/history",
    params,
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    if (response.status === 200) {
      return response.data.response;
    }

    return [];
  } catch (error) {
    console.error(error);
  }
};
