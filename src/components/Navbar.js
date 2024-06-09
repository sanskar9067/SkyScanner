import React, { useContext } from 'react'
import DarkModeContext from '../context/DarkModeContext';
import Logo from '../assets/logo.jpeg'

export default function Navbar() {

    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);


    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={Logo} className="h-12" alt=" Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">SkyScanner</span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button
                        onClick={toggleDarkMode}
                        className="relative inline-flex items-center justify-center p-2 my-2 transition duration-500 ease-in-out transform rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white shadow-md hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 dark:text-gray-300"
                    >
                        <span className="relative">
                            {darkMode ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m4.243 1.757l1.414-1.414M18 12h2M15.243 19.243l1.414 1.414M12 18v2m-4.243-1.757l-1.414 1.414M6 12H4m2.757-4.243L7.343 6.343M9 12a3 3 0 116 0 3 3 0 01-6 0z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.53 0-2.935.295-4.234.822a9 9 0 0012.036 12.036A9 9 0 0112 3z" />
                                </svg>
                            )}
                        </span>
                        <span className="ml-2">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                    </button>

                </div>

            </div>
        </nav>
    );
}
