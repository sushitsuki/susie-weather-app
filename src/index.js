function formatDate(date) {
  let hour = date.getHours();
  let minutes = date.getMinutes();

  let weekDays = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[weekDays];

  return `${day}, ${hour}:${minutes}`;
}

function displayWeather(response) {
  document.querySelector("#current-city").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = response.data.temp;
  document.querySelector("#humidity").innerHTML = response.data.humidity;
  document.querySelector("#wind").innerHTML = response.data.wind.speed;
}
function searchCity(city) {
  let apiKey = "c819171fe0abdc14039af4ef5dda283b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metrics`;
  axios.get(apiUrl).then(displayWeather);
}
function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "c819171fe0abdc14039af4ef5dda283b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

function convertToClesius(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = 0;
}

function contvetToFahrenheit() {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = 0;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let currentButton = document.querySelector("#current-button");
currentButton.addEventListener("click", getCurrentLocation);

searchCity("Lisbon");
