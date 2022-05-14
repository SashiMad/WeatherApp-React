import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <br />
      <hr />
      <h1>{props.data.city}</h1>
      <div className="row">
        <div className="col-6">
          <div className="date">
            <FormattedDate date={props.data.date} />
          </div>
          <div className="description text-capitalize">
            {props.data.description}
          </div>
          <div className="col-6">
            <div className="attributes">
              <div>
                Humidity: <span>{props.data.humidity}</span> %
              </div>
              <div>
                Wind: <span>{props.data.wind}</span> m/h
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="currentWeather">
            <span className="weatherIcon">
              <WeatherIcon code={props.data.icon} size={64} />
            </span>
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </div>
    </div>
  );
}
