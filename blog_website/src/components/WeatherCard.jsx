import React, { useState, useEffect } from "react";

const WeatherCard = () => {
  const [city, setCity] = useState("Kathmandu");
  const [latitude, setLatitude] = useState(27.7172); // Default latitude for Kathmandu
  const [longitude, setLongitude] = useState(85.3240); // Default longitude for Kathmandu
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  // Free Weather API URL
  const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

  // Fetch Weather Data
  const fetchWeather = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error("Unable to fetch weather data");
      const data = await response.json();
      setWeatherData(data.current_weather);
      setError("");
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [latitude, longitude]);

  const handleSearch = async () => {
    // Free Geocoding API to get latitude and longitude
    const geocodingUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;
    try {
      const response = await fetch(geocodingUrl);
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        const { latitude, longitude } = data.results[0];
        setLatitude(latitude);
        setLongitude(longitude);
      } else {
        throw new Error("City not found");
      }
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    }
  };

  return (
    <div className="flex justify-center items-center  ">
      <div className="bg-white w-[450px] p-6 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Weather App</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter city name"
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <button
          onClick={handleSearch}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Search
        </button>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        {weatherData && (
          <div className="mt-6 text-center">
            <h3 className="text-xl font-bold text-gray-800">{city}</h3>
            <p className="text-gray-700">{weatherData.weathercode}</p>
            <p className="text-4xl font-bold text-gray-900">{weatherData.temperature}°C</p>
            <div className="flex justify-around mt-4">
              <div>
                <p className="text-gray-600">Wind</p>
                <p className="text-gray-800 font-semibold">{weatherData.windspeed} km/h</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherCard;
