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
              <WeatherIcon code={props.data.icon} />
            </span>
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </div>

      <div className="forecast" id="forecast">
        <div className="row">
          <div className="col-2">
            Wed
            <div>
              <img
                src="https://openweathermap.org/img/wn/01d@2x.png"
                alt=""
                width="42"
              />
            </div>
            <span className="max-forecast">20°</span>{" "}
            <span className="min-forecast">10°</span>
          </div>
          <div className="col-2">
            Thu
            <div>
              <img
                src="https://openweathermap.org/img/wn/01d@2x.png"
                alt=""
                width="42"
              />
            </div>
            <span className="max-forecast">20°</span>{" "}
            <span className="min-forecast">10°</span>
          </div>
          <div className="col-2">
            Fri
            <div>
              <img
                src="https://openweathermap.org/img/wn/01d@2x.png"
                alt=""
                width="42"
              />
            </div>
            <span className="max-forecast">20°</span>{" "}
            <span className="min-forecast">10°</span>
          </div>
          <div className="col-2">
            Sat
            <div>
              <img
                src="https://openweathermap.org/img/wn/01d@2x.png"
                alt=""
                width="42"
              />
            </div>
            <span className="max-forecast">20°</span>{" "}
            <span className="min-forecast">10°</span>
          </div>
          <div className="col-2">
            Sun
            <div>
              <img
                src="https://openweathermap.org/img/wn/01d@2x.png"
                alt=""
                width="42"
              />
            </div>
            <span className="max-forecast">20°</span>{" "}
            <span className="min-forecast">10°</span>
          </div>
          <div className="col-2">
            Mon
            <div>
              <img
                src="https://openweathermap.org/img/wn/01d@2x.png"
                alt=""
                width="42"
              />
            </div>
            <span className="max-forecast">20°</span>{" "}
            <span className="min-forecast">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
