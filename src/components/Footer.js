import React from 'react'
import Logo from '../assets/logo.jpeg'

export default function Footer() {
    return (
        <div>


            <footer className="bg-white shadow dark:bg-gray-900 m-0">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src={Logo} className="h-8" alt="logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SkyScanner</span>
                        </a>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/" className="hover:underline">SkyScanner</a>. All Rights Reserved.</span>
                </div>
            </footer>





        </div>
    )
}

