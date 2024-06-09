import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner';

export default function Weather() {
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);
    const [weather, setWeather] = useState(null);

    const [time, setTime] = useState();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            setLat(latitude);
            setLon(longitude);
        });
    }, []);
    useEffect(() => {
        if (lat !== null && lon !== null) {
            fetchData(lat, lon);
            fetchTime(lat, lon);
        }
    }, [lat, lon]);

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

            {
                weather ? (<>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 dark:bg-gray-900">
                        <h2 className="my-5 text-4xl font-extrabold dark:text-white">Your Current Location : {weather.name}</h2>
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
                            {lat && lon && (
                                <iframe className='rounded-lg'
                                    width="100%"
                                    height="450"
                                    src={`https://maps.google.com/?q=${lat},${lon}&z=15&output=embed`}
                                    allowFullScreen
                                    title="Location Map"
                                ></iframe>
                            )}
                        </div>
                    </div>
                </>) : (<>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 dark:bg-gray-900 mt-5"><Spinner /></div></>)
            }


        </div>


    )
}
