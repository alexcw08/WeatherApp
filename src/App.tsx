import "./App.css";
import CityCard from "./components/cityCard";
import SearchBar from "./components/SearchBar";
import HourlyCard from "./components/hourlyCard";
import DailyCard from "./components/dailyCard";
import { useState, useEffect } from "react";

// TO DO
// - incorporate lat and long variables into the weatherURL to fetch weather for a dif zip code
// - pass hourlyData prop to hourCont component
// - pass dailyData prop to dayCont component

function App() {
  // API KEYS
  const zipKey: string = import.meta.env.VITE_ZIP_KEY;
  const weatherKey: string = import.meta.env.VITE_WEATHER_KEY;

  // STATES
  const [zipCode, setZipCode] = useState<string>("02108"); // default is zip for BOSTON MA
  const [locInfo, setLocInfo] = useState({});
  const [lat, setLat] = useState(42.35);
  const [long, setLong] = useState(-71.06);
  const [currentData, setCurrentData] = useState({});
  const [hourlyData, setHourlyData] = useState<object[]>([]);
  const [dailyData, setDailyData] = useState<object[]>([]);
  const [dateAndTime, setDateAndTime] = useState({});

  // API URL
  // const weatherURL: string = `https://api.openweathermap.org/data/2.5/onecall?lat=42.46&lon=-70.94&exclude=alerts,minutely&units=imperial&appid=${weatherKey}`;
  const weatherURL: string = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=alerts,minutely&units=imperial&appid=${weatherKey}`;

  const geoURL: string = `https://api.geocod.io/v1.7/geocode?postal_code=${zipCode}&api_key=${zipKey}`;

  // FUNCTIONS
  const fetchWeather = async () => {
    // call API
    const api = await fetch(weatherURL);
    const data = await api.json();

    // set state for current weather forecast
    const currentWeather = {
      time: data.current.dt,
      temp: data.current.temp,
      description: data.current.weather[0].main,
      max: data.daily[0].temp.max,
      min: data.daily[0].temp.min,
    };
    setCurrentData(currentWeather);

    // set state for hourly weather forecast
    // let hourlyWeather = data.hourly;

    const hourlyWeather: object[] = [];
    for (let i = 1; i < 13; i++) {
      const hourObj = {
        time: getTime(data.hourly[i].dt),
        temp: data.hourly[i].temp,
        description: data.hourly[i].weather[0].main,
      };
      hourlyWeather.push(hourObj);
    }
    setHourlyData(hourlyWeather);

    // set state for daily weather forecast
    const dailyWeather: object[] = [];
    for (let i = 1; i < 8; i++) {
      const dayObj = {
        day: getDay(data.daily[i].dt)[0],
        temp: data.daily[i].temp.day,
        max: data.daily[i].temp.max,
        min: data.daily[i].temp.min,
        description: data.daily[i].weather[0].main,
      };
      dailyWeather.push(dayObj);
    }
    // const dailyWeather = data.daily;
    // dailyWeather.shift();
    console.log(dailyWeather);

    setDailyData(dailyWeather);

    // get date and time
    const unix: number = currentWeather.time;
    const dateAndTime = getDateTime(unix);
    setDateAndTime(dateAndTime);
    // console.log(dateAndTime);
  };

  const fetchCoords = async () => {
    const api = await fetch(geoURL);
    console.log("fetching zipcode:", zipCode);
    const data = await api.json();

    // get city/state info
    setLocInfo(data.results[0].address_components);

    // set latitude and longitude
    setLat(data.results[0].location.lat);
    setLong(data.results[0].location.lng);
    console.log(
      "lat and long for",
      zipCode,
      data.results[0].location.lat,
      data.results[0].location.lng
    );
  };

  const getDateTime = (unix: number) => {
    const time = getTime(unix);
    const dayArr = getDay(unix);
    const day = dayArr[0];
    const numDay = dayArr[1];
    const month = getMonth(unix);
    return { date: numDay, day: day, month: month, time: time };
  };

  const getTime = (unix: number) => {
    const date = new Date(unix * 1000);
    let meridiem: string = "";
    let hour: number = date.getHours();
    let minute: number | string = date.getMinutes();

    if (hour == 0) {
      meridiem = "AM";
      hour = 12;
    } else if (hour < 12) {
      meridiem = "AM";
    } else if (hour > 12) {
      meridiem = "PM";
      hour = hour % 12;
    } else if (hour == 12) {
      meridiem = "PM";
    }
    if (minute < 10) {
      minute = `0${minute}`;
    }
    const time: string = `${hour}:${minute} ${meridiem}`;
    return time;
  };

  const getDay = (unix: number) => {
    const date = new Date(unix * 1000);
    let day: number | string = date.getDay();
    const numDate: number = date.getDate();
    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    day = dayNames[day];
    return [day, numDate];
  };

  const getMonth = (unix: number) => {
    const date = new Date(unix * 1000);
    let month: number | string = date.getMonth();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    month = months[month];
    return month;
  };
  // HOOKS
  useEffect(() => {
    fetchWeather();
  }, [lat, long]);

  useEffect(() => {
    fetchCoords();
  }, [zipCode]);

  return (
    <div className="bg-violet-200 flex flex-col items-center min-h-screen overflow-hidden">
      <SearchBar setZipCode={setZipCode} />
      <CityCard
        data={currentData}
        locData={locInfo}
        dateAndTime={dateAndTime}
      />
      <HourlyCard hourlyData={hourlyData} />
      <DailyCard dailyData={dailyData} />
    </div>
  );
}

export default App;
