const BASE_URl = "https://api.openweathermap.org/data/2.5";

const API_KEY = "7df88c5740a72f00ad5eab41989c2846";

const searchInput = document.querySelector("input");
const searchButton = document.querySelector("button");

const getCurrentWeatherByName = async (city) => {
  const url = `${BASE_URl}/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

const searchHandler = async () => {
  const cityName = searchInput.value;

  if (!cityName) {
    alert("Please enter city name!");
  }

  const currentData = await getCurrentWeatherByName(cityName);
  console.log(currentData);
};

searchButton.addEventListener("click", searchHandler);
