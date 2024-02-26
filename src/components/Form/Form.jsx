import React from 'react'

const Form = ({city, setCity, setWeather}) => {
  const submitHandler = (e) => {
    e.preventDefault()
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bf71a1eace3b9c431d69e52fca836090`)
    .then(res => res.json())
    .then(d => setWeather(d))
  }
  const cityChangeInputHandler = (e) => {
      setCity(e.target.value)
  }
  return (
      <div className="Form">
      <div className='form-container'>
        <form  onSubmit={submitHandler}>
          <input className='weather-input' type="text" value={city} onChange={cityChangeInputHandler}></input>
          <button type="submit" className="btn">Search city</button>
        </form>
      </div>
      </div>
    );
}

export default Form