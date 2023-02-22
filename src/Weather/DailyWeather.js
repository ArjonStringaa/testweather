import React from 'react'

function DailyWeather({dateNum , dayIcon , tempLow , tempHigh,dailyForecast}) {

    console.log(dateNum)
    dateNum = new Date(dateNum * 1000) // date format
    console.log(dateNum)
    dateNum.getDay() // day number
    console.log(dateNum)
    let options = {weekday:'short'} // weekday stays for short 'Fri' when its long it will show  'Friday' 
    dateNum=Intl.DateTimeFormat('en-US',options).format(dateNum)
    console.log(dateNum)
  return (
    <div>
        <h3>Daily Weather</h3>
        <img src={dayIcon.icon}/>
        <h2>{dateNum}</h2>
        <h2>{tempHigh}</h2>
        <h2>{tempLow}</h2>
        <h2>{dailyForecast}</h2>
    </div>
  )
}

export default DailyWeather