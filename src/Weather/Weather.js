import React, {useState,useEffect} from 'react';
import DailyWeather from './DailyWeather';
function Weather() {
    const [weatherData ,setWeatherData] = useState()

    const APIKey = '62b4fa2da657635b1784d8a82861b4e0';

    function getWeather(){
        if(!navigator.geolocation){
            console.log('Geo Location does not work');
        } else{
            navigator.geolocation.getCurrentPosition((position)=>{
                
        const API = `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&exclude=minutely&appid=${APIKey}`
        fetch(API)  //fetch the api
        .then(res=>res.json()) // retuns a result wich is converted in json so we can use it in react
        .then(data=>{
            // console.log(data);
            setWeatherData(data)
        })
        .catch(err =>   console.log(err)) //just in case we got an error it will console log it here
            })
        }
    }

    useEffect(()=>{
        getWeather() // loads the get weather function that is up everytime it reloads since [] is empty
    },[])
   if (weatherData) console.log(weatherData);  // it will console log only after weather data is set
  return (
    <div>
    <h1>Weather</h1>
    {weatherData ? weatherData.daily.slice(0,7).map((day,i) => {   
        
        //if we got the weather data from the api 
        //we target weather data daily "slice means take 0-7 days from 8 that the api gives us " 

    return <DailyWeather key={i}
    dateNum={day.dt}  // takes the date from the api  dynamically
    dayIcon={"http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png"} // modified the ${day.weather[0] so the icon gets dynamic
    tempHigh={day.temp.max}  // highest temp took from api
    tempLow={day.temp.min}  // lowest temperature took from api
    dailyForecast={day.weather.main} // current weather forecast data we need to get to filter the table we gonna build
    />
    
}) : 
    //<h2>Loading...</h2>  // else print loading
    
<div role="status">
    <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
// Tailwind loading spinner that shows till the data is taken from the api
}
    </div>
  )
}

export default Weather