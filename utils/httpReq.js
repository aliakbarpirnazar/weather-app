import { showModal } from "./modal.js";

const BASE_URl = "https://api.openweathermap.org/data/2.5";
const API_KEY = "7df88c5740a72f00ad5eab41989c2846";

const getWeatherData = async (type, data) => {
  let url = null;

  switch (type) {
    case "current":
      if (typeof data === "string") {
        url = `${BASE_URl}/weather?q=${data}&appid=${API_KEY}&units=metric`;
      } else {
        url = `${BASE_URl}/weather?lat=${data.latitude}&lon=${data.longitude}&appid=${API_KEY}&units=metric`;
      }

      break;

    case "forecast":
      if (typeof data === "string") {
        url = `${BASE_URl}/forecast?q=${data}&appid=${API_KEY}&units=metric`;
      } else {
        url = `${BASE_URl}/forecast?lat=${data.latitude}&lon=${data.longitude}&appid=${API_KEY}&units=metric`;
      }
      break;
    default:
      url = `${BASE_URl}/weather?q=qom&appid=${API_KEY}&units=metric`;
      break;
  }
  try {
    const response = await fetch(url);
    const json = await response.json();
    if (+json.cod === 200) {
      return json;
    } else {
      showModal(json.message);
    }
  } catch (error) {
    showModal("An error occurd when fetching data");
  }
};

export default getWeatherData;
