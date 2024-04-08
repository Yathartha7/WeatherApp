import "./current_weather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        ></img>
        <div className="topDetails">
          <div className="parameter-rowTop">
            <span className="city">{data.city}</span>
          </div>
          <div className="parameter-row">
            <span className="weather-description">
              {data.weather[0].description.toUpperCase()}
            </span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>

        <div className="details">
          <div className="parameter-row">
            <span className="paramemeter-label">Feels like</span>
            <span className="paramemeter-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="paramemeter-label">Wind speed</span>
            <span className="paramemeter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="paramemeter-label">Humidity</span>
            <span className="paramemeter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="paramemeter-label">Pressure</span>
            <span className="paramemeter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;

/*<div className="parameter-row">
            <span className="paramemeter-label">Details</span>
          </div>*/
