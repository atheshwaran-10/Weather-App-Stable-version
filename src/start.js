import React, { useEffect, useState } from 'react';
import Weather from './components/weather';
import { fetchData, assignData ,fetchForecast ,assignForecast } from './App';
import './App.css';

function Start() 
{
  const [location, setLocation] = useState(null);
  const [showButton, setShowButton] = useState(true);
  const [showData, setShowData] = useState(false);
  const [data, setData] = useState(null);
  const [forecast, setForecast] = useState(null);

  useEffect(() => 
  {
    const fetchWeatherData = async () => {
      if (location) {
        const fetchedData = await fetchData(location.lat, location.lon);
        const assignedData = assignData(fetchedData);
        setData(assignedData);
        const fetchedForecast = await fetchForecast(location.lat, location.lon);
        const assignedForecast = assignForecast(fetchedForecast);
        setForecast(assignedForecast);
      }
    };

    fetchWeatherData();
  }, [location]);

  const handleButtonClick = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
      setShowButton(false);
      setShowData(true);
    });
  };

  return (
    <div className='data'>
      {showButton && (
        <button onClick={handleButtonClick} className="button">
          Get Weather updates
        </button>
      )}
      <div className="App">
  
        {showData && data && (
          <div>
            <h1>Today Weather Updates</h1>
            <Weather data={data} day="0" />
          </div>
        )}
      </div>
    
        {
          forecast &&(
            <div>
              <h1 style={{textAlign:'center',marginTop:'7px',}}>Weather Forecast for 3 Days</h1>
              <div className="sub">
                <Weather data={forecast.day1} day="1" />
                <Weather data={forecast.day2} day="2" />
                <Weather data={forecast.day3} day="3" />
              </div>
            </div>
          )
        }
      
    </div>
  );
}

export default Start;
