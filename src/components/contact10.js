import React from 'react'
import './contact10.css'

const Contact10 = () => {
    return (
        <div id="contacts" className="contact10-container thq-section-padding">
            <div className="contact10-max-width thq-section-max-width">
                <div className="contact10-content1">
                    <div className="contact10-text-block">
                        <h2 className="contact10-heading">Контакты</h2>

                        <div className="contact10-section">
                            <h3>Технический директор</h3>
                            <p>Тимофеев Антон Михайлович</p>
                            <p><a href="tel:+79215751463">+7 (921) 575-14-63</a></p>
                            <p><a href="mailto:Anton260977@mail.ru">Anton260977@mail.ru</a></p>
                        </div>

                        <div className="contact10-section">
                            <h3>Генеральный директор</h3>
                            <p>Демешко Александр Евгеньевич</p>
                            {/*<p><a href="tel:+79219876543"> !! !! !!+7 (921) 987-65-43 НЕТ ТЕЛЕФОНА??</a></p>*/}
                            <p><a href="mailto:demehsco@mail.">demehsco@mail.ru</a></p>
                        </div>

                        <div className="contact10-section">
                            <h3>Офисы</h3>
                            <p>196070, г. Санкт-Петербург, Московский пр-т 183-185, лит. А, к. 8, пом. 788Н, ЖК «Граф
                                Орлов» — <em> !!! ! ! ! !как добраться</em></p>
                            <p>191144, г. Санкт-Петербург, 5-я Советская ул., д. 38, пом 1 Н, часть офиса 2 — <em> !!
                                !!! !! !как добраться</em></p>
                        </div>
                    </div>

                    <div className="contact10-map">
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3Aeb5bf0d2b96973b27a146282fbe5a9fc96e0939e09f59cf4d4bba5cf5a7abeca&amp;source=constructor"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            title="Карта офисов"
                            style={{borderRadius: '12px'}}
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact10
