function Start() 
{

  let lat,lon=getLocation();
  console.log(lat+" "+lon);



  /*const [lon, setLon] = useState('');
  const [lat, setLat] = useState('');
  const [data, setData] = useState([]);
  const [forecastData, setForecast] = useState([]);
  const [dataFetched, setIsDataFetched] = useState(false);
  const [forecastdataFetched, set3DayDataFetched] = useState(false);
  let main_day = null;
  let fore_day = [];

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      });
      if (!dataFetched) {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
          );

          if (response.ok) {
            const result = await response.json();
            setData(result);
            setIsDataFetched(true);
          } else {
            throw new Error('Request failed');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      }
    };

    if (!dataFetched) {
      fetchData();
    }
  }, [lat, lon, dataFetched]);

  // 3 day forecast
  useEffect(() => {
    const fetchForecast = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      });

      if (!forecastdataFetched) {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`
          );

          if (response.ok) {
            const result = await response.json();
            setForecast(result);
            set3DayDataFetched(true);
          } else {
            throw new Error('Request failed');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      }
    };

    if (!forecastdataFetched) {
      fetchForecast();
    }
  }, [lat, lon, forecastdataFetched, forecastData]);

  return (
    <div>
      <div className="App">
        <h1>Today Weather Updates</h1>
        {typeof data.main !== 'undefined' ? (
          (main_day = {
            name: data.name,
            temp: data.main.temp,
            humid: data.main.humidity,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            desc: data.weather[0].main
          }),
          <Weather data={main_day} day="0" />
        ) : (
          <div></div>
        )}
      </div>
      <div>
      <h1 style={{textAlign:'center',marginTop:'7px',}}>Weather Forecast for 3 Days</h1>
        {forecastData.cod === '200' ? (
          console.log(forecastData.city.name),
          (fore_day = {
            day1: {
              name: forecastData.city.name,
              temp: forecastData.list[0].main.temp,
              humid: forecastData.list[0].main.humidity,
              sunrise: forecastData.city.sunrise,
              sunset: forecastData.city.sunset,
              desc: forecastData.list[0].weather[0].main
            },
            day2: {
              name: forecastData.city.name,
              temp: forecastData.list[5].main.temp,
              humid: forecastData.list[5].main.humidity,
              sunrise: forecastData.city.sunrise,
              sunset: forecastData.city.sunset,
              desc: forecastData.list[5].weather[0].main
            },
            day3: {
              name: forecastData.city.name,
              temp: forecastData.list[10].main.temp,
              humid: forecastData.list[10].main.humidity,
              sunrise: forecastData.city.sunrise,
              sunset: forecastData.city.sunset,
              desc: forecastData.list[10].weather[0].main
            }
          }),
          <div className="sub">
            <Weather data={fore_day.day1} day="1" />
            <Weather data={fore_day.day2} day="2" />
            <Weather data={fore_day.day3} day="3" />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
  */      
}

export default Start;
