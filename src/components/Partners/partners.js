import React from 'react'

import './partners.css'

const PARTNER_CAPTIONS = [
    "СКА, г. Санкт-Петербург",
    "ООО «Максидом»",
    "ООО «ЛСР-Строй»",
    "ООО «СПМБМООО «Малахит»",
    "ООО «ТехноНИКОЛЬ-Северо-запад»",
    "ПАО «Ленэнерго» «ДСО»",
    "СПбДА РПЦ",
    "ООО «Сэтл Групп»",
    "СПбГБУК «Санкт-Петербургский большой театр кукол»",
    "ЗАО «Контейнерный терминал Санкт-Петербург»",
    "СПбГБУЗ «Елизаветинская больница»",
    "АО «Русская Телефонная Компания»",
    "АО «ПИиНИИ ВТ «Ленаэропроект»",
    "СК «Авангард»",
    "ОАО «Ленинградское областное жилищное агентство»",
    "ООО «БВИ-инжиниринг»",
    "ООО «Газпром Инвест»",
]

const Partners = () => {
    return (
        <div className="testimonials-container10" id="partners">
            <h2 className="testimonials-title">Партнеры</h2>
            <div className="testimonials-grid">
                {Array.from({length: PARTNER_CAPTIONS.length}).map((_, index) => (
                    <div className="testimonials-item" key={index}>
                        <div className="testimonials-wrapper">
                            <img
                                src={`/images/partners/${index + 1}.png`}
                                alt={`Партнёр ${index + 1}`}
                                className="testimonials-logo"
                            />
                            {PARTNER_CAPTIONS[index] && (
                                <div className="testimonials-caption">{PARTNER_CAPTIONS[index]}</div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Partners
