import React, {Fragment} from 'react'

import {Helmet} from 'react-helmet-async'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Portfolio from '../components/portfolio'
import Services from '../components/services'
import Testimonials from '../components/testimonials'
import Licenses from '../components/licenses'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
    return (
        <div className="home-container">
            <Helmet>
                <title>ECPSP</title>
                <meta property="og:title" content="ECPSP"/>
            </Helmet>
            <Navbar8

            ></Navbar8>
            <Hero17
                content1={
                    <Fragment>
                  <span className="home-text26">
                    Наша компания специализируется в том-то том-то так-то так-то
                  </span>
                    </Fragment>
                }
                heading1={
                    <Fragment>
                        <span className="home-text27">Добро пожаловать в ООО ЭЦ ПСП!</span>
                    </Fragment>
                }
            ></Hero17>
            <Services
            ></Services>
            <Portfolio
            ></Portfolio>

            <Testimonials
                text={
                    <Fragment>
                        <span className="home-text46">×</span>
                    </Fragment>
                }
                text1={
                    <Fragment>
                  <span className="home-text47">
                    Благодарственное письмо от клиента А
                  </span>
                    </Fragment>
                }
                text2={
                    <Fragment>
                        <span className="home-text48">Рекомендация от партнёра B</span>
                    </Fragment>
                }
                text3={
                    <Fragment>
                        <span className="home-text49">Благодарность от организации C</span>
                    </Fragment>
                }
                text4={
                    <Fragment>
                        <span className="home-text50">Отзывы от участников проекта D</span>
                    </Fragment>
                }
                heading={
                    <Fragment>
                        <span className="home-text51">Благодарности</span>
                    </Fragment>
                }
                rootClassName="testimonialsroot-class-name"
            ></Testimonials>
            <Licenses
                text={
                    <Fragment>
                        <span className="home-text52">×</span>
                    </Fragment>
                }
                text1={
                    <Fragment>
                  <span className="home-text53">
                    Лицензия на ведение деятельности A
                  </span>
                    </Fragment>
                }
                text2={
                    <Fragment>
                        <span className="home-text54">Разрешение от организации B</span>
                    </Fragment>
                }
                text3={
                    <Fragment>
                        <span className="home-text55">Лицензия C</span>
                    </Fragment>
                }
                text4={
                    <Fragment>
                        <span className="home-text56">Сертификация D</span>
                    </Fragment>
                }
                heading={
                    <Fragment>
                        <span className="home-text57">Лицензии</span>
                    </Fragment>
                }
                rootClassName="licensesroot-class-name"
            ></Licenses>
            <Contact10
                content1={
                    <Fragment>
                        <span className="home-text58">+7912312312</span>
                    </Fragment>
                }
                heading1={
                    <Fragment>
                        <span className="home-text59">Контакты</span>
                    </Fragment>
                }
                content11={
                    <Fragment>
                        <span className="home-text60">email@mail.m</span>
                    </Fragment>
                }
                content111={
                    <Fragment>
                  <span className="home-text61">
                    Санкт-Петербург, улица Пушкина, дом 1
                  </span>
                    </Fragment>
                }
            ></Contact10>
            <Footer4></Footer4>
        </div>
    )
}

export default Home
