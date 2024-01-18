import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [city, setCity] = useState('Tbilisi');
  const [state1,setState1] = useState('')
  const [state2,setState2] = useState('')
  const [state3,setState3] = useState('')
  const [state4,setState4] = useState('')
  const [state5,setState5] = useState('')
  const [state6,setState6] = useState('')

  const getWeather = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8230c11d1c9b581aebc5cc25ce54c58c&units=metric`)
      .then((res) => {
        console.log(res.data)
        setState1(res.data.wind.speed)
        setState2(res.data.sys.country)
        setState3(res.data.main.humidity)
        setState4(res.data.main.temp_max)
        setState5(res.data.clouds.all)
        setState6(res.data.main.temp_min)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getWeather();

  }, [city]);

  return (
    <>
      <header>
        <img src="Group 165.svg" alt="" />
        <input
          type="text"
          placeholder="Search Location..."
          maxLength={15}
          onChange={(e) => setCity(e.target.value)}
        />
      </header>
      <div className="mid">
        <h1 className='temp'>{state4}°</h1>
        <div className="rame">
          <h1 className='cityname'>{city}</h1>
          <h2 className='date'>06:09 - Monday, 9 Sep ‘23</h2>
        </div>
        <img src="new.svg" alt="" />
      </div>
      <div className="bottom">
        <p className='det'>Weather Details...</p>
        <div className="qvemot">
          <p className='ilia'>thunderstorm with light drizzle</p>
          <div className="giorgi">
            <p className='tempmax'>Temp Max</p>
            <p className='marjvena'>{state4}°</p>
            <img src="Vector2.svg" alt="" />
          </div>
          <div className="giorgi">
            <p className='tempmax'>Temp Min</p>
            <p className='marjvena'>{state6}°</p>
            <img src="Vector.svg" alt="" />
          </div>
          <div className="giorgi">
            <p className='tempmax'>Humadity</p>
            <p className='marjvena'>{state3}%</p>
            <img src="outline.svg" alt="" />
          </div>
          <div className="giorgi">
            <p className='tempmax'>Cloudy</p>
            <p className='marjvena'>{state5}%</p>
            <img src="outline2.svg" alt="" />
          </div>
          <div className="giorgi">
            <p className='tempmax'>Wind</p>
            <p className='marjvena'>{state1}</p>
            <img src="outline3.svg" alt="" />
          </div>
          
        </div>
        <footer>
          <div className="line"></div>
        </footer>
      </div>
      
      
    </>
  )
}

export default App
