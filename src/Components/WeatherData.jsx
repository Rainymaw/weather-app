import React from "react";
import { useContext } from "react";
import { Context } from "../Context/Context";

function WeatherData(props) {
  let { weather } = useContext(Context);
  console.log(weather);
  return (
    <div>{weather ? <div>{weather.current.temperature_2m}</div> : ""}</div>
  );
}

export default WeatherData;
