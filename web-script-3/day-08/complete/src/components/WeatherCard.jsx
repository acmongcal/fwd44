import { useState, useEffect } from "react";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function WeatherCard({ cityName, title }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!cityName.trim()) {
      setWeather(null);
      setLoading(false);
      setError(null);
      return;
    }

    let isMounted = true;

    const timer = setTimeout(() => {
      const fetchWeather = async () => {
        setLoading(true);
        setError(null);

        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
          );

          if (!response.ok) {
            throw new Error("City not found");
          }

          const data = await response.json();

          if (isMounted) {
            setWeather(data);
            setLoading(false);
          }
        } catch (err) {
          if (isMounted) {
            setError(err.message);
            setWeather(null);
            setLoading(false);
          }
        }
      };
      fetchWeather();
    }, 1000);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [cityName]);

  if (loading)
    return <div className="weather-card loading">Loading weather...</div>;
  if (error) return <div className="weather-card error">Error: {error}</div>;

  if (weather) {
    const temp = Math.round(weather.main.temp);
    const description = weather.weather[0].description;
    const humidity = weather.main.humidity;
    const windSpeed = weather.wind.speed;

    return (
      <div className="weather-card">
        <h3>{title}</h3>
        <p className="city-name">
          {weather.name}, {weather.sys.country}
        </p>

        <div className="temperature">
          <span className="temp-value">{temp}°C</span>
          <span className="description">{description}</span>
        </div>

        <div className="weather-details">
          <div className="detail-item">
            <span className="label">Humidity:</span>
            <span className="value">{humidity}%</span>
          </div>
          <div className="detail-item">
            <span className="label">Wind:</span>
            <span className="value">{windSpeed} m/s</span>
          </div>
        </div>
      </div>
    );
  }

  return <div className="weather-card placeholder">Enter a city name</div>;
}

export default WeatherCard;
