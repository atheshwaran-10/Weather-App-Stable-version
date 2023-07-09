const key = 'f2063c7d82b03ed06f7aff8f7a809a09';



export async function fetchData(lat, lon) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
  );

  if (response.ok) {
    const data = await response.json();
  
    return data;
  }
}

export async function fetchForecast(lat, lon) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`
  );

  if (response.ok) {
    const data = await response.json();
  
    return data;
  }
}

export function assignData(data) {
  let main_day = null;

  if (data && data.name) {
    main_day = {
      name: data.name,
      temp: data.main.temp,
      humid: data.main.humidity,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
      desc: data.weather[0].main
    }
  }

  return main_day;
}

export function assignForecast(forecastData) {
  let fore_day = null;

  if (forecastData && forecastData.city.name) {
    fore_day = {
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
    }
  }

  return fore_day;
}
