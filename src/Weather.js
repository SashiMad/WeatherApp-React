import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  function handleResponse(response) {
    console.log(response.data);
  }
  let city = "New York";
  let apiKey = "9d758950ce365ca1ca1f6506e3b99115";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=&{apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  let weatherData = {
    city: "Sydney",
    temperature: 29,
    date: "Tuesday 21:00",
    description: "Clear",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 15,
  };
  return (
    <div className="App">
      <div className="weatherapp">
        <form>
          <div className="row">
            <div className="col-6">
              <input
                type="text"
                placeholder="Search city"
                className="form-control search-bar"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="form-control search-button"
              />
            </div>
            <div className="col-3">
              <button className="btn btn-dark w-100">Current📍</button>
            </div>
          </div>
        </form>
        <br />
        <hr />
        <h1>{weatherData.city}</h1>
        <div className="row">
          <div className="col-6">
            <div className="now">{weatherData.date}</div>
            <div className="description">{weatherData.description}</div>
            <div className="col-6">
              <div className="attributes">
                <div>
                  Humidity: <span>{weatherData.humidity}</span> %
                </div>
                <div>
                  Wind: <span>{weatherData.wind}</span> m/h
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="currentWeather">
              <span className="weatherIcon">
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.description}
                ></img>
              </span>
              <span className="currentDegree">{weatherData.temperature}</span>
              <span className="units">
                <a href="number" className="active">
                  °C
                </a>{" "}
                |
                <a href="number" id="fahrenheit-link">
                  °F
                </a>
              </span>
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
      <p className="footer">
        <a
          href="https://github.com/SashiMad/WeatherApp-React"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>
        &nbsp;by Sashi Madleniak
      </p>
    </div>
  );
}
