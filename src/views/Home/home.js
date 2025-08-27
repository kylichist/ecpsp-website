import React from 'react'

import Navbar from '../../components/Navbar/navbar'
import Hero from '../../components/Hero/hero'
import Portfolio from '../../components/Portfolio/portfolio'
import Services from '../../components/Services/services'
import Partners from '../../components/Partners/partners'
import Licenses from '../../components/Licenses/licenses'
import Contacts from '../../components/Contacts/contacts'
import Footer from '../../components/Footer/footer'

import './home.css'

const Home = () => {
    return (<div className="home-container">
        <title>ECPSP</title>
        <meta property="og:title" content="ECPSP"/>
        <Navbar/>
        <Hero/>
        <Services/>
        <Portfolio/>
        <Partners/>
        <Licenses/>
        <Contacts/>
        <Footer/>
    </div>)
}

export default Home
