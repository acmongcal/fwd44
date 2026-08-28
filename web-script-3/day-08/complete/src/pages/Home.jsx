import { useContext } from 'react'
import { WeatherContext } from '../components/WeatherContext'
import CityInputs from '../components/CityInputs'
import WeatherCard from '../components/WeatherCard'

 function Home() {
  const { originCity, currentCity } = useContext(WeatherContext)

  return (
    <>
      <h2>🌤️ Weather Comparison</h2>
      <CityInputs />
      <div className="weather-grid">
        <WeatherCard cityName={originCity} title="Origin City" />
        <WeatherCard cityName={currentCity} title="Current City" />
      </div>
    </>
  )
}

export default Home;