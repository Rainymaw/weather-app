import React from "react";
import { useContext } from "react";
import { Context } from "../Context/Context";
import WeatherData from "./WeatherData";

function Weather(props) {
  let { weather, setWeather, position, setPosition, getWeatherData } =
    useContext(Context);
  let changePosition = (event) => {
    console.log(event.target.value);
    let string = event.target.value.split(",");
    setPosition({ lat: string[0], long: string[1] });
  };
  let cities = [
    {
      city: "algiers",
      lat: 36.7323,
      long: 3.0875,
    },
    {
      city: "Oran",
      lat: 35.7,
      long: -0.64,
    },
    {
      city: "Bejaia",
      lat: 36.76,
      long: 5.08,
    },
  ];
  return (
    <div>
      <select onChange={(event) => changePosition(event)}>
        {cities.map(({ city, lat, long }, index) => (
          <option key={city} value={lat + "," + long}>
            {city}
          </option>
        ))}
      </select>
      <input type="button" value="SEARCH" onClick={() => getWeatherData()} />
      <WeatherData />
    </div>
  );
}

export default Weather;
