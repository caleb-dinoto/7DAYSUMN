import React, { useState, useEffect } from 'react';

const Weather = ({ city }) => {
  const [currentWeather, setCurrentWeather] = useState(null);

  // Panggil data news pas pertama kali render
  useEffect(() => {
    const getWeather = async () => {
      const req = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e37bdcdeb6d70bd6d6b904e6b4bd42e7`
      );
      const data = await req.json();
      setCurrentWeather(data);
    };
    getWeather();
  }, [city]);

  return (
    <div>
      <img
        src={
          currentWeather &&
          `http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`
        }
        alt={currentWeather && `${currentWeather.weather[0].main} icon`}
      />
      <p>
        {city}, {currentWeather && currentWeather.weather[0].main}
      </p>
    </div>
  );
};

export default React.memo(Weather);
