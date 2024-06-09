import axios from 'axios';
import React, { useState } from 'react'

export default function WeatherSearch() {
    const [location, setLocation] = useState();
    const [weather, setWeather] = useState();
    const [error, setError] = useState('');
    const [time, setTime] = useState();

    const getData = async (e) => {
        e.preventDefault();
        try {
            setError('');
            const res = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${process.env.REACT_APP_API_KEY}`);
            if (res.data.length === 0) {
                setError('Location not found. Please try again.');
                setWeather();
                return;
            }
            fetchData(res.data[0].lat, res.data[0].lon);
            fetchTime(res.data[0].lat, res.data[0].lon);
        } catch (error) {
            console.log(error);
            setError('An error occurred. Please try again.');
        }
    }


    const fetchData = async (lat, lon) => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`;
            const response = await axios.get(url);
            setWeather(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const fetchTime = async (lat, lon) => {
        try {
            const url = `https://api.api-ninjas.com/v1/worldtime?lat=${lat}&lon=${lon}`;
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Key': process.env.REACT_APP_TIME_API_KEY
                }
            });
            const data = await res.json();
            setTime(data);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
            <div className="bg-white dark:bg-gray-900 flex justify-center">
                <form className="my-5 max-w-md w-full mx-auto" onSubmit={getData}>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" value={location} onChange={(e) => setLocation(e.target.value)} className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter any city" required />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>
            </div>
            {error && <div className="text-red-500 text-center my-4">{error}</div>}
            {
                weather ? (<>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 dark:bg-gray-900">
                        <h2 className="my-5 text-4xl font-extrabold dark:text-white" style={{ 'textAlign': 'center' }}>Location Found : {weather.name}</h2>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center justify-center dark:bg-gray-900 p-6 space-y-6 lg:space-y-0 lg:space-x-6">
                        <div className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-xs lg:max-w-md">
                            <div className="font-bold text-2xl dark:text-white">{weather.name}</div>
                            {
                                time && (
                                    <>
                                        <div className="my-4 text-sm text-gray-500 dark:text-gray-400"><strong>Date: </strong>{time.day_of_week} {time.day}/{time.month}/{time.year}</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400"><strong>Time: </strong>{time.hour}:{time.minute} ({time.timezone})</div>
                                    </>

                                )
                            }
                            <div className="mt-6 text6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 dark:text-indigo-300 h-24 w-24">
                                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={`${weather.weather[0].main}`} />
                            </div>
                            <div className="flex flex-row items-center justify-center mt-6">
                                <div className="font-medium text-6xl dark:text-white">{(weather.main.temp - 273.15).toFixed(2)}°</div>
                                <div className="flex flex-col items-center ml-6 dark:text-gray-300">
                                    <div>{weather.weather[0].main}</div>
                                    <div className="mt-1 flex items-center">
                                        <i className="far fa-long-arrow-up text-sm dark:text-gray-400"></i>
                                        <span className="text-sm font-light text-gray-500 dark:text-gray-400 ml-1">Feels like : {(weather.main.feels_like - 273.15).toFixed(2)}°C</span>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="far fa-long-arrow-down text-sm dark:text-gray-400"></i>
                                        <span className="text-sm font-light text-gray-500 dark:text-gray-400 ml-1">Max Temp: {(weather.main.temp_max - 273.15).toFixed(2)}°C</span>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="far fa-long-arrow-down text-sm dark:text-gray-400"></i>
                                        <span className="text-sm font-light text-gray-500 dark:text-gray-400 ml-1">Min Temp: {(weather.main.temp_min - 273.15).toFixed(2)}°C</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between mt-6">
                                <div className="flex flex-col items-center">
                                    <div className="font-medium text-sm dark:text-white">Wind</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">{weather.wind.speed} k/h</div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="font-medium text-sm dark:text-white">Humidity</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">{weather.main.humidity}%</div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="font-medium text-sm dark:text-white">Visibility</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">{weather.visibility / 1000} km</div>
                                </div>
                            </div>
                        </div>
                        <div id="map" className="w-full max-w-md rounded-lg">

                            <iframe className='rounded-lg'
                                width="100%"
                                height="450"
                                src={`https://maps.google.com/?q=${weather.coord.lat},${weather.coord.lon}&z=15&output=embed`}
                                allowFullScreen
                                title="Location Map"
                            ></iframe>
                        </div>
                    </div>
                </>) : (<></>)
            }

        </div>

    )
}
