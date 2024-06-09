import React from 'react'
import Logo from '../assets/logo.jpeg'

export default function Heroes() {
    return (
        <div>
            <section className="bg-center bg-no-repeat bg-[url('https://manybackgrounds.com/images/hd/dark-stormy-weather-pfmyayz2skg8g8s7.jpg')] bg-gray-700 bg-blend-multiply">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <div className="flex justify-center ">
                        <img src={Logo} className='w-32 h-32 lg:w-48 lg:h-48 object-contain' alt="logo" />
                    </div>
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                        SkyScanner
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                        Navigate nature effortlessly with SkyScanner, your ultimate weather companion. Get real-time updates, precise forecasts, and personalized alerts to stay ahead of the elements and plan your day with confidence.
                    </p>
                </div>
            </section>
        </div>
    )
}
