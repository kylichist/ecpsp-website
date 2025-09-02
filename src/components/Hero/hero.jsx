import React from 'react'

import './hero.css'

const HERO_DESCRIPTION = `Добро пожаловать на сайт нашей компании — надежного партнера в сфере комплексного сопровождения строительной отрасли!
Мы предлагаем широкий спектр услуг, включающих обследование и мониторинг зданий и сооружений, строительный контроль, технический надзор и лабораторное сопровождение проектов любого уровня сложности. Наш профессиональный коллектив и современное оборудование позволяют гарантировать точность, объективность и своевременность выполняемых работ.
Обратившись к нам, вы получите полную поддержку на каждом этапе реализации вашего проекта — от первичной диагностики объекта до выдачи заключительных отчетов и рекомендаций. Вместе мы обеспечим безопасность, долговечность и экономичность ваших строительно-монтажных мероприятий.`

const Hero = () => {
    return (<div id="about" className="hero17-header78">
        <h1 className="hero17-text1">
            Добро пожаловать в ЭЦ «ПСП»!
        </h1>
        <div className="hero17-column hero17-row">
            <div
                className="hero17-logo"
                style={{backgroundImage: 'url("/images/logo.png")'}}
            />
            <div className="hero17-text-block">
                <p className="hero17-text2">
                    <span className="hero17-quote-mark top">“</span>
                    <pre className="hero17-text4">{HERO_DESCRIPTION}</pre>
                    <span className="hero17-quote-mark bottom">”</span>
                </p>
            </div>
        </div>
    </div>)
}

export default Hero
