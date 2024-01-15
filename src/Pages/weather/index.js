import React, { useEffect, useState } from 'react'

export default function Index() {
  const [search, setSearch] = useState("lahore");
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');

  let componentsMounted = true;

  //fetch data when component mounts
  const handelSubmit = (e) => {
    e.preventDefault();
    setSearch(input)
  }


  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=43a6ed1c90738bd04639717fe7dc977f`);
      if (componentsMounted) {
        setData(await response.json());
        console.log(data)
      }
      return () => {
        componentsMounted = false;
      }
    }
    fetchWeather();
  }, [search]);

  let emoji=null
  if(typeof data.main != "undefined"){
    if(data.weather[0].main==="clouds"){
      emoji="fa-cloud"
    }
    else if(data.weather[0].main==="Thunderstrome"){
      emoji="fa-bolt"
    }else if(data.weather[0].main==="Drizzle"){
      emoji="fa-cloud-rain"
    }else if(data.weather[0].main==="Rain"){
      emoji="fa-cloud-showers-heavy"
    }else if(data.weather[0].main==="Snow"){
      emoji="fa-snow-flake"
    }
    else if(data.weather[0].main==="clear"){
      emoji="fa-sun"
    }
    else {
      emoji="fa-smog"
    }
  }else{
    return(
        <div className='text-center text-white'>Loding...</div>
    )
  }

  let temp = (data.main.temp - 273.15).toFixed(2); 
  let temp_min = (data.main.temp_min - 273.15).toFixed(2); 
  let temp_max = (data.main.temp_max - 273.15).toFixed(2) ;

  let d = new Date();
  let date = d.getDate();
  let year = d.getFullYear();
  let month = d.toLocaleString("default", { month: "long" });
  let day = d.toLocaleString("default", { weekday: "long" })
  let time = d.toLocaleString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col">
            <div className='weather'>
              <div className="card text-white text-center mt-3 mb-5 w-75">
                <img src={`https://source.unsplash.com/random/?${data.weather[0].main}`} className="card-img" alt="..." />

                <div className="card-img-overlay">
                  <form onSubmit={handelSubmit}>
                    <div className="input-group mb-4">
                      <input type="text" className="form-control" value={input} onChange={(e) =>  setInput(e.target.value) } name='search' placeholder="country for search" required />
                      <button className="input-group-text" id="basic-addon2"><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                  </form>
                  <h1 className="card-title">{data.name}</h1>
                  <p className="card-text"> {day}, {month} {date}, {year}</p>
                  <p className="card-text">{time}</p>
                  <hr />
                  <div className='clouds'>
                    <i className={  `fa-solid ${emoji} fa-4x`}></i>
                    {/* {<p className="fa-solid fa-bolt fa-4x"></p>} */}
                  </div>

                  <h2 className='fa-bolder'>{temp}&deg;c</h2>
                  <h4 className='mt-5'>{data.weather[0].main}</h4>
                  <p>{temp_min}&deg;c | {temp_max}&deg;c</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
