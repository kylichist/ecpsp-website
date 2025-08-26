import React, {useState} from 'react'
import PropTypes from 'prop-types'
import './navbar8.css'

const Navbar8 = ({
                     logoSrc,
                     logoAlt,
                     link1,
                     link1Url,
                     link2,
                     link2Url,
                     link3,
                     link3Url,
                     link4,
                     link4Url,
                     link5,
                     link5Url,
                     link6,
                     link6Url,
                 }) => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleToggleMenu = () => setMenuOpen(!menuOpen)
    const closeMenu = () => setMenuOpen(false)

    const links = [
        {text: link1, url: link1Url},
        {text: link3, url: link3Url},
        {text: link2, url: link2Url},
        {text: link6, url: link6Url},
        {text: link4, url: link4Url},
        {text: link5, url: link5Url},
    ]

    return (
        <header className="navbar8-container1">
            <div className="navbar8-navbar-interactive">
                <img alt={logoAlt} src={logoSrc} className="navbar8-image1"/>
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
                    <img alt={logoAlt} src={logoSrc} className="navbar8-logo"/>
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

Navbar8.propTypes = {
    logoSrc: PropTypes.string,
    logoAlt: PropTypes.string,
    link1: PropTypes.string,
    link1Url: PropTypes.string,
    link2: PropTypes.string,
    link2Url: PropTypes.string,
    link3: PropTypes.string,
    link3Url: PropTypes.string,
    link4: PropTypes.string,
    link4Url: PropTypes.string,
    link5: PropTypes.string,
    link5Url: PropTypes.string,
    link6: PropTypes.string,
    link6Url: PropTypes.string,
}

Navbar8.defaultProps = {
    logoSrc: '/images/logo_no_text.png',
    logoAlt: 'Логотип компании',
    link1: 'О компании',
    link1Url: '#about',
    link2: 'Портфолио',
    link2Url: '#portfolio',
    link3: 'Услуги',
    link3Url: '#services',
    link4: 'Лицензии',
    link4Url: '#licenses',
    link5: 'Контакты',
    link5Url: '#contacts',
    link6: 'Партнеры',
    link6Url: '#partners',
}

export default Navbar8
