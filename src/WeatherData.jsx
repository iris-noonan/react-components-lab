// src/WeatherData.jsx

const WeatherData = (props) => {
  const { conditions, time } = props;

  return (
    <div>
      <p><span>conditions: </span>{conditions}</p>
      <p><span>time: </span>{time}</p>
    </div>
  );
};

export default WeatherData;