import React from 'react'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Portfolio from '../components/portfolio'
import Services from '../components/services'
import Testimonials from '../components/testimonials'
import Licenses from '../components/licenses'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = () => {
    return (
        <div className="home-container">
            <title>ECPSP</title>
            <meta property="og:title" content="ECPSP"/>
            <Navbar8/>
            <Hero17/>
            <Services/>
            <Portfolio/>
            <Testimonials/>
            <Licenses/>
            <Contact10/>
            <Footer4/>
        </div>
    )
}

export default Home
