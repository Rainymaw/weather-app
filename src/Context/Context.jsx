import { createContext, useState, useEffect } from "react";
import axios from "axios";
//étape 1 : pour créer un context, o nva utiliser createContext
const Context = createContext();

//étape 2 : pour créer le provider on va définir un component Provider
const Provider = ({ children }) => {
  const [position, setPosition] = useState({
    lat: 0,
    long: 0,
  });
  const [weather, setWeather] = useState("");

  let getWeatherData = async () => {
    let url = `https://api.open-meteo.com/v1/forecast?latitude=${position.lat}&longitude=${position.long}&current=temperature_2m,weather_code&hourly=temperature_2m,weather_code&timezone=GMT&forecast_days=1 `;
    try {
      let response = await axios.get(url);
      setWeather(response.data);
    } catch (error) {
      console.error("There is an errror : " + error);
    }
  };
  let info = {
    position: position,
    setPosition: setPosition,
    weather: weather,
    setWeather: setWeather,
    getWeatherData: getWeatherData,
  };
  return <Context.Provider value={info}>{children}</Context.Provider>;
};

export { Context, Provider };
