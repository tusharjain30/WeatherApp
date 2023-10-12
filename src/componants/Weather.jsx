import React,{useState, useEffect} from 'react';
import '../App.css';

let Weather = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState('Delhi');

    let key = `7f296d69946509341261deebdba537ba`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${key}`;

    useEffect(() => {
        
        const fetchData = async () => {
            try{
            let respone = await fetch(url);
            let resJson = await respone.json();
                setCity(resJson.main)
            }
            catch(err){
                console.log(err);
            }
        }
            
        fetchData();
    },[search]);
        

    return (
        <>
            <div className='box'>
                <input type = 'text' className='input_type' placeholder='Enter your City' value = {search} onChange={(event) => {setSearch(event.target.value)}} />
                { 
                    !city ? (<p>Data Not Found, Please Enter City!</p>) : (
                    <div>
                    <h3 className='city_name'><i className="fa-solid fa-street-view"></i>{search}</h3>
                    <div className='wave'>
                        <h1 className="temp">{city.temp}°C</h1>
                        <p className='temp-max-min'>Min : {city.temp_min}°C | Max : {city.temp_max}°C</p>
                    </div>
                    </div>
                )}
            </div>
        </>    
    )
}

export default Weather;