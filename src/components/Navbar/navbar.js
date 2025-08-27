import React, {useState} from 'react'

import './navbar.css'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const handleToggleMenu = () => setMenuOpen(!menuOpen)
    const closeMenu = () => setMenuOpen(false)

    const links = [
        {text: 'О компании', url: '#about'},
        {text: 'Услуги', url: '#services'},
        {text: 'Портфолио', url: '#portfolio'},
        {text: 'Партнеры', url: '#partners'},
        {text: 'Лицензии', url: '#licenses'},
        {text: 'Контакты', url: '#contacts'},
    ]

    return (
        <header className="navbar8-container1">
            <div className="navbar8-navbar-interactive">
                <img alt={'Логотип компании'} src={'/images/logo_no_text.png'} className="navbar8-image1"/>
                <nav className="navbar8-links1">
                    {links.map((link, i) => (
                        <a key={i} href={link.url} className="thq-body-small thq-link">
                            {link.text}
                        </a>
                    ))}
                </nav>
                <div className="navbar8-burger-menu" onClick={handleToggleMenu}>
                    <svg
                        viewBox="0 0 1024 1024"
                        className="navbar8-icon10"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M128 554.67h768v-85.34H128v85.34zM128 768h768v-85.34H128V768zM128 341.33h768V256H128v85.33z"/>
                    </svg>
                </div>
            </div>
            <div className={`navbar8-mobile-menu ${menuOpen ? 'open' : ''}`}>
                <div className="navbar8-top">
                    <img alt={'Логотип компании'} src={'/images/logo_no_text.png'} className="navbar8-logo"/>
                    <div className="navbar8-close-menu" onClick={closeMenu}>
                        <svg
                            viewBox="0 0 1024 1024"
                            className="navbar8-icon12"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M810.67 273.07L750.93 213.33 512 452.27 273.07 213.33 213.33 273.07 452.27 512 213.33 750.93l59.74 59.74L512 571.73l238.93 238.94 59.74-59.74L571.73 512z"/>
                        </svg>
                    </div>
                </div>
                <div className="navbar8-links2">
                    {links.map((link, i) => (
                        <a key={i} href={link.url} onClick={closeMenu} className="thq-body-small thq-link">
                            {link.text}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    )
}

export default Navbar
