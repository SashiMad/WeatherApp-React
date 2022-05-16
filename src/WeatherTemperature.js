import React from "react";

export default function WeatherTemperature(props) {
  return (
    <span className="WeatherTemperature">
      <span className="currentDegree">{Math.round(props.celsius)}</span>
      <span className="units">°C</span>
    </span>
  );
}
