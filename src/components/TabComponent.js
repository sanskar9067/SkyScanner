import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Weather from './Weather';
import WeatherSearch from './WeatherSearch';

export default function TabComponent() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="dark:bg-gray-900 dark:text-white py-4 ">
            <hr className="w-8 h-8 mx-auto my-8 bg-gray-200 border-0 rounded md:my-12 dark:bg-gray-700"></hr>
            <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
                <TabList className="flex justify-center dark:bg-gray-900" >
                    <Tab
                        className={`relative px-4 py-2 mx-2 rounded transition duration-300 ease-in-out cursor-default ${activeTab === 0 ? 'dark:text-white dark:bg-gray-900' : 'dark:text-gray-400'
                            }`}
                    >
                        <p className="text-md">Current Location Weather Forecast</p>
                        {activeTab === 0 && (
                            <span className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 rounded-t-md"></span>
                        )}
                    </Tab>
                    <Tab
                        className={`relative px-4 py-2 mx-2 rounded transition duration-300 ease-in-out cursor-default ${activeTab === 1 ? 'dark:text-white dark:bg-gray-900' : 'dark:text-gray-400'
                            }`}
                    >
                        <p className="text-md">Search for any location</p>
                        {activeTab === 1 && (
                            <span className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 rounded-t-md"></span>
                        )}
                    </Tab>
                </TabList>

                <TabPanel>
                    <Weather />
                </TabPanel>
                <TabPanel>
                    <WeatherSearch />
                </TabPanel>
            </Tabs>
        </div>
    );
}
