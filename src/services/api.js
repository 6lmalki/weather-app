const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchWeatherData = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  );
  const data = await response.json();
  return data;
};
