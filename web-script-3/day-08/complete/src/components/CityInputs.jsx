import { useContext } from 'react';
import {WeatherContext} from './WeatherContext';

 function CityInputs() {
  const { originCity, setOriginCity, currentCity, setCurrentCity } = useContext(WeatherContext);
  
  return (
    <div className="city-inputs">
      <div className="input-group">
        <label htmlFor="origin">Origin City:</label>
        <input
          id="origin"
          type="text"
          value={originCity}
          onChange={(e) => setOriginCity(e.target.value)}
          placeholder="e.g., London"
          className="city-input"
        />
      </div>
      
      <div className="input-group">
        <label htmlFor="current">Current City:</label>
        <input
          id="current"
          type="text"
          value={currentCity}
          onChange={(e) => setCurrentCity(e.target.value)}
          placeholder="e.g., New York"
          className="city-input"
        />
      </div>
    </div>
  );
}

export default CityInputs;