import { useContext } from 'react';
import {WeatherContext} from './WeatherContext';

 function CityInputs() {
   const {originCity,setOriginCity, currentCity, setCurrentCity}=useContext(WeatherContext);
  return (
    <div className="city-inputs">
      <div className="input-group">
        <label htmlFor="origin">Origin City:</label>
        <input 
          type="text" 
          name="origin" 
          id="origin" 
          placeholder="e.g. London" 
          className="city-input" value={originCity} 
          onChange={(e)=>setOriginCity(e.target.value)}/>
      </div>
      <div className="input-group">
        <label htmlFor="current">Current City:</label>
        <input 
          type="text" 
          name="current" 
          id="current" 
          placeholder="e.g. New York" 
          className="city-input" value={currentCity} 
          onChange={(e)=>setCurrentCity(e.target.value)}/>
      </div>
    </div>
  );
}

export default CityInputs;