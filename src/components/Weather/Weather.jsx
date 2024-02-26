import React from 'react'

const Weather = React.memo(
    ({weather}) => {
    
        const timaFormater = (sec, includeParams = true) => {
            const monthNames = [
                'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
                'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
              ];
    
            const time = new Date(sec*1000)
            const hours = time.getHours()
            const minutes = time.getMinutes()    
            const day = time.getDate()
            const month = monthNames[time.getMonth()];
    
            if(includeParams) {
               return  `${hours}:${minutes}, ${month} ${day}`
            }else {
                return `${hours}:${minutes}`
            }
    }
    
    const weatherIcon = weather && weather.weather && weather.weather[0] ? weather.weather[0].icon : '';
      
    return (
        <>
        {
        weather && weather.cod !=='200'?
        <div className='weather'>
        <div className='city-info'>
             <p>Текущее время: {timaFormater(weather.dt)}</p>
             <p className="location">{weather.name && weather.sys ? `${weather.name}, ${weather.sys.country}` : ''}</p>
             <p>{weather.weather[0].description.charAt(0).toUpperCase()+weather.weather[0].description.slice(1)}</p>
        </div>
        <div className='temp'>
          <img src={`http://openweathermap.org/img/w/${weatherIcon}.png`} alt='Weather icon'/>
            <p>{weather.main && weather.main.temp? `${(weather.main.temp - 273.15).toFixed(0)}°C`: ''}</p>
        </div> 
        <div className='row'>
        <div className='col'>
             <p>Закат: {timaFormater(weather.sys.sunset, false)}</p>
        </div>
        <div className='col'>
             <p>Рассвет: {timaFormater(weather.sys.sunrise, false)}</p>
        </div>
        <span className='short-line'></span>
        <div className='col'>
             <p>Скорость ветра:</p>
             <p>{weather.wind.speed} m/s</p>
        </div>
        <div className='col'>
             <p>Ощущается как: {(weather.main.temp - 273.15).toFixed(0)}°C</p>
        </div>
        <span className='short-line'></span>
        <div className='col'>
             <p>Влажность:</p>
             <p>{weather.main.humidity} %</p>
        </div>
        <div className='col'>
             <p >Давление:</p>
             <p> {weather.main.pressure} hPa</p>
        </div>
        </div>
        </div>
        :
        <></>
        }
        </>
      )
    }
)

export default Weather