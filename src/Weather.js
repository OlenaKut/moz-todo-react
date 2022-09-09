import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "82914429dbcac50d79e072b0c73a8cb3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function showWeather(response) {
    setTemperature(Math.round(response.data.main.temp));
  }

  function changeCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={changeCity} />
        <input type="submit" value="Search" />
      </form>
      <p>
        {city}: {temperature}
      </p>
    </div>
  );
}
