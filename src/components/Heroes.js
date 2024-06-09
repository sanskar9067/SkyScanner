import React from 'react'
import Logo from '../assets/logo.jpeg'

export default function Heroes() {
    return (
        <div>
            <section className="bg-center bg-no-repeat bg-[url('https://manybackgrounds.com/images/hd/dark-stormy-weather-pfmyayz2skg8g8s7.jpg')] bg-gray-700 bg-blend-multiply">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-12 lg:py-24">
                    <div className="flex justify-center ">
                        <img src={Logo} className="w-32 h-32 lg:w-48 lg:h-48 object-contain" alt="logo" />
                    </div>
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                        SkyScanner
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                        "Forecasting your skies, one scan at a time."
                    </p>
                </div>
            </section>
        </div>

    )
}
