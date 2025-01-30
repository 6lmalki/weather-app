import { useEffect, useState } from "react";
import { fetchWeatherData } from "./services/api";
import clearImage from "./assets/clear.png";
import cloudImage from "./assets/cloud.png";
import drizzleImage from "./assets/drizzle.png";
import humidityImage from "./assets/humidity.png";
import rainImage from "./assets/rain.png";
import snowImage from "./assets/snow.png";
import windImage from "./assets/wind.png";
import SearchForm from "./components/SearchForm";
import WeatherImage from "./components/WeatherImage";
import MainData from "./components/MainData";
import SubData from "./components/SubData";
import "./css/App.css";

function App() {
  const [search, setSearch] = useState("");
  const [weatherData, setWeatherData] = useState({
    humidity: 0,
    main: { humidity: 0, temp: 0 },
    name: "",
    weather: [{ main: "" }],
    wind: { spped: 0 },
  });

  useEffect(() => {
    const getDefaultWeatherData = async () => {
      try {
        const weatherData = await fetchWeatherData("Muscat");
        setWeatherData(weatherData);
      } catch (error) {
        console.log(error);
      }
    };

    getDefaultWeatherData();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!search.trim()) {
      alert("Please enter a city name!");
      setSearch("");
      return;
    }

    setSearch(search);

    try {
      const weatherData = await fetchWeatherData(search);
      if (weatherData.cod === "404") {
        alert("City not found!");
        setSearch("");
        return;
      }
      setWeatherData(weatherData);
    } catch (error) {
      console.log(error);
    }
  };

  const renderWeatherImage = (status) => {
    if (status === "Clear") {
      return <WeatherImage image={clearImage} />;
    } else if (status === "Clouds") {
      return <WeatherImage image={cloudImage} />;
    } else if (status === "Haze" || status === "Mist") {
      return <WeatherImage image={drizzleImage} />;
    } else if (status === "Rain") {
      return <WeatherImage image={rainImage} />;
    } else if (status === "Snow") {
      return <WeatherImage image={snowImage} />;
    }
  };

  return (
    <div className="weather-app">
      <SearchForm
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      <main className="weather-data">
        {renderWeatherImage(weatherData.weather[0].main)}
        <div className="weather-main-data">
          <MainData
            temperature={`${Math.floor(weatherData.main.temp)}°C`}
            location={weatherData.name}
          />
        </div>
        <div className="weather-sub-data">
          <SubData
            image={humidityImage}
            data={`${weatherData.main.humidity}%`}
            dataType="Humidity"
          />
          <SubData
            image={windImage}
            data={`${weatherData.wind.speed} Km/h`}
            dataType="Wind Speed"
          />
        </div>
      </main>
    </div>
  );
}

export default App;
