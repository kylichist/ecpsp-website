import React from 'react'

import './licenses.css'

const licenses = [{
    title: 'Ассоциация саморегулируемая организация «Балтийская объединение изыскателей»',
    img: '/images/licenses/1.jpg',
    pdf: '/pdfs/licenses/1.pdf'
}, {
    title: 'Ассоциация саморегулируемая организация «Балтийское объединение проектировщиков» ',
    img: '/images/licenses/2.jpg',
    pdf: '/pdfs/licenses/2.pdf'
}, {
    title: 'Осуществление деятельности по сохранению объектов культурного наследия',
    img: '/images/licenses/3.jpg',
    pdf: '/pdfs/licenses/3.pdf'
}, {
    title: 'Область деятельности испытательной лаборатории ООО «ЭЦ «ПСП»',
    img: '/images/licenses/4.jpg',
    pdf: '/pdfs/licenses/4.pdf'
}, {
    title: 'Ассоциация «Петровское объединение строителей»', img: '/images/licenses/5.jpg', pdf: '/pdfs/licenses/5.pdf'
}, {
    title: 'Свидетельство об аттестации испытательной лаборатории ООО «ЭЦ «ПСП»',
    img: '/images/licenses/6.jpg',
    pdf: '/pdfs/licenses/6.pdf'
},]

const Licenses = () => {
    return (<div id="licenses">
        <div className="licenses-container10">
            <div className="licenses-container12"/>
            <div id="licenses-scroll" className="licenses-section">
                <h2 className="licenses-title">Лицензии</h2>
                <div className="licenses-grid">
                    {licenses.map((license, index) => (<a
                        key={index}
                        className="licenses-item"
                        href={license.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={license.img} alt={license.title}/>
                        <p>{license.title}</p>
                    </a>))}
                </div>
            </div>
        </div>
    </div>)
}

export default Licenses
