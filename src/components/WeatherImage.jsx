import "../css/WeatherImage.css";

const WeatherImage = ({ image }) => {
  return <img className="weather-image" src={image} />;
};

export default WeatherImage;
