import React, {useState} from 'react'

import './contacts.css'

const Contacts = () => {
    const [showModal, setShowModal] = useState(false)

    const handleBackdropClick = (e) => {
        if (e.target.classList.contains('fullscreen-backdrop')) {
            setShowModal(false)
        }
    }

    return (<div id="contacts" className="contact10-container thq-section-padding">
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
                        <p><a href="mailto:spb@ecpsp.ch">spb@ecpsp.ch</a></p>
                    </div>
                    <div className="contact10-section">
                        <h3>Офисы</h3>
                        <p>
                            196070, г. Санкт-Петербург, Московский пр-т 183-185, лит. А, к. 8, пом. 788Н, ЖК «Граф
                            Орлов», домофон 788 —{' '}
                            <em className="clickable" onClick={() => setShowModal(true)}>Как добраться?</em>
                        </p>
                        <p>Городской телефон офиса в ЖК «Граф Орлов»: <a
                            href="tel:+78126025752">602-57-52</a></p>
                        <p>
                            191144, г. Санкт-Петербург, 5-я Советская ул., д. 38, пом 1 Н, часть офиса 2
                        </p>
                    </div>
                </div>
                <div className="contact10-map">
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3Aeb5bf0d2b96973b27a146282fbe5a9fc96e0939e09f59cf4d4bba5cf5a7abeca&amp;source=constructor"
                        width="100%"
                        height="100%"
                        title="Карта офисов"
                        style={{border: "none", borderRadius: '12px'}}
                    ></iframe>
                </div>
            </div>
        </div>
        {showModal && (<div className="fullscreen-backdrop" onClick={handleBackdropClick}>
            <img
                src="/images/contacts/path_to_office1.jpg"
                alt="Как добраться"
                className="fullscreen-image"
            />
        </div>)}
    </div>)
}

export default Contacts
