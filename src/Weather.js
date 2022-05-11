import React from "react";
import "./Weather.css";

export default function Weather() {
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

        <div class="forecast" id="forecast">
          <div class="row">
            <div class="col-2">
              Thu
              <img
                src="https://openweathermap.org/img/wn/${forecastDay.weather[0].icon
          }@2x.png"
                alt=""
                width="42"
              />
              <span class="max-forecast">20°</span>{" "}
              <span class="min-forecast">10°</span>
            </div>
          </div>
          <br />
        </div>
      </div>
      <p class="footer">
        <a
          href="https://github.com/Sashicake/Weather-App-SheCodes"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        by Sashi Madleniak
      </p>
    </div>
  );
}
