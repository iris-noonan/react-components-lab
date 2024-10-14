// src/WeatherForecast.jsx

import './WeatherForecast.css'
import WeatherIcon from './WeatherIcon.jsx';
import WeatherData from './WeatherData.jsx';

const WeatherForecast = (props) => {
  const { forecast } = props;

  return (
    <div className="weather">
      <h2>{forecast.day}</h2> 
      <WeatherIcon img={forecast.img} imgAlt={forecast.imgAlt} />
      <WeatherData conditions={forecast.conditions} time={forecast.time} />
    </div>
  );
};

export default WeatherForecast;