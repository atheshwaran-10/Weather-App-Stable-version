import React from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMountainSun,
  faSun,
  faTemperatureHigh,
  faDroplet,
  faHouse,
  faCalendarDays
} from '@fortawesome/free-solid-svg-icons';
import { WiDayHail, WiDaySunny,WiNightAltCloudy,WiCloud,WiNightCloudyGusts,WiDayShowers, WiThunderstorm,WiDaySnow,WiSnowWind} from 'weather-icons-react';
import 'semantic-ui-css/semantic.min.css';
import './styles.css';


function getWeatherIcon(desc) {
  switch (desc) {
    case 'Rain':
      return <WiDayHail className="icon" size={33} color="#ffffff" />;
    case 'Clear':
      return <WiDaySunny className="icon" size={33} color="#ffffff" />;
    case 'Clear sky':
      return <WiCloud className="icon" size={33} color="#ffffff" />;
    case 'Clouds':
        return <WiNightAltCloudy className="icon" size={33} color="#ffffff" />;
    case 'Broken clouds':
      return <WiNightCloudyGusts className="icon" size={33} color="#ffffff" />;
    case 'Shower rain':
        return <WiDayShowers className="icon" size={33} color="#ffffff" />;
    case 'Drizzle':
        return <WiDayShowers className="icon" size={33} color="#ffffff" />;
    case 'Thunderstorm':
        return <WiThunderstorm className="icon" size={33} color="#ffffff" />;
    case 'Snow':
      return <WiDaySnow className="icon" size={33} color="#ffffff" />;
    case 'Mist':
      return <WiSnowWind className="icon" size={33} color="#ffffff" />;
    default:
      return null;
  }
}

function Weather(props) {
  const weatherIcon = getWeatherIcon(props.data.desc);

  return (
    <div className="main">
      <p className="header">
        <FontAwesomeIcon icon={faHouse} size="xs" /> {props.data.name}
      </p>
      <div className="flex">
        <p className="day">
          <FontAwesomeIcon icon={faCalendarDays} style={{ color: '#ffffff' }} />{' '}
          {moment().add(props.day, 'days').format('DD MMMM YYYY').toString()}
        </p>
        <p className="description">
          {props.data.desc} {weatherIcon}
        </p>
      </div>
      <div className="flex">
        <p className="temp">
          <FontAwesomeIcon icon={faTemperatureHigh} /> Temperature:{' '}
          {(props.data.temp - 273.15).toFixed(1)}&deg;C
        </p>
        <p className="temp">
          <FontAwesomeIcon icon={faDroplet} /> Humidity: {props.data.humid}%
        </p>
      </div>
      <div className="flex">
        <p className="sunrise-sunset">
          <FontAwesomeIcon icon={faSun} style={{ color: '#ffffff' }} /> Sunrise:{' '}
          {new Date(props.data.sunrise * 1000).toLocaleTimeString('en-IN')}
        </p>
        <p className="sunrise-sunset">
          <FontAwesomeIcon icon={faMountainSun} style={{ color: '#ffffff' }} /> Sunset:{' '}
          {new Date(props.data.sunset * 1000).toLocaleTimeString('en-IN')}
        </p>
      </div>
    </div>
  );
}

export default Weather;
