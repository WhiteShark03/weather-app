import { useState } from "react";
import './App.css'
import Form from "./components/Form";
import Weather from "./components/Weather/Weather";
import Error from "./components/Error";

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  
  return (
    <div className="App">
      <Form city={city} setCity={setCity} weather={weather} setWeather={setWeather}></Form>
      {
        weather && weather.cod !== 200 ?
        <Error weather={weather}/>
        :<Weather weather={weather}/>
      }
    </div>
  );
}

export default App;

