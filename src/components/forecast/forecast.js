import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "./forecast.css";

const WEEKDAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const Forecast = ({ data }) => {
  const today = new Date().getDay();
  const forecastDays = WEEKDAYS.slice(today, WEEKDAYS.length).concat(
    WEEKDAYS.slice(0, today)
  );
  console.log(data);
  return (
    <div className="forecastMain">
      <label className="forecastTitle">Weekly Forecast</label>
      <div className="days">
        {data.list.slice(0, 7).map((item, idx) => (
          <div key={idx}>
            <div className="daily-item">
              <label className="day">{forecastDays[idx]}</label>
              <img
                alt="error"
                className="icon-small"
                src={`icons/${item.weather[0].icon}.png`}
              ></img>
              <br></br>
              <label className="description">
                {item.weather[0].description.toUpperCase()}
              </label>
              <br></br>
              <label className="min-max">
                {Math.round(item.main.temp_min)}°C /{" "}
                {Math.round(item.main.temp_max)}°C
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
