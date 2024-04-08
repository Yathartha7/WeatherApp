import "./App.css";
import Search from "./components/search/search";
import CurrentWeather from "./components/current_weather/current_weather";
import { Weather_API_Key } from "./api";
import { WEATHER_API_URL } from "./api";
import { useState } from "react";
import Forecast from "./components/forecast/forecast";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.locs.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?units=metric&lat=${lat}&lon=${lon}&appid=${Weather_API_Key}`
    );

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?units=metric&lat=${lat}&lon=${lon}&appid=${Weather_API_Key}`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  //console.log(currentWeather);
  //console.log(forecast);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <br></br>
      {currentWeather && <CurrentWeather data={currentWeather} />}
      <br></br>
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
