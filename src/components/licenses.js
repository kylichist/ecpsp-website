import React from 'react'
import './licenses.css'

const licenses = [
    {title: 'Лицензия 1', img: '/images/licenses/1.jpg', pdf: '/pdf/licenses/1.pdf'},
    {title: 'Лицензия 2', img: '/images/licenses/2.jpg', pdf: '/pdf/licenses/2.pdf'},
    {title: 'Лицензия 3', img: '/images/licenses/3.jpg', pdf: '/pdf/licenses/3.pdf'},
    {title: 'Лицензия 4', img: '/images/licenses/4.jpg', pdf: '/pdf/licenses/4.pdf'},
    {title: 'Лицензия 5', img: '/images/licenses/5.jpg', pdf: '/pdf/licenses/5.pdf'},
    {title: 'Лицензия 6', img: '/images/licenses/6.jpg', pdf: '/pdf/licenses/6.pdf'},
]

const Licenses = () => {
    return (
        <div id="licenses">
            <div className="licenses-container10">
                <div className="licenses-container12"/>
                <div id="licenses-scroll" className="licenses-section">
                    <h2 className="licenses-title">Лицензии</h2>
                    <div className="licenses-grid">
                        {licenses.map((license, index) => (
                            <a
                                key={index}
                                className="licenses-item"
                                href={license.pdf}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={license.img} alt={license.title}/>
                                <p>{license.title}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Licenses
