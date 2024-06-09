import React from 'react'
import Navbar from '../components/Navbar'
import Heroes from '../components/Heroes'
import Footer from '../components/Footer'
import TabComponent from '../components/TabComponent'

export default function Home() {
    return (
        <div>
            <Navbar />
            <Heroes />
            <TabComponent />
            <Footer />
        </div>
    )
}
