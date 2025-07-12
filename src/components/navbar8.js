import React from 'react'
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
    return (
        <header className="navbar8-container1">
            <div className="navbar8-navbar-interactive">
                <img alt={logoAlt} src={logoSrc} className="navbar8-image1"/>
                <nav className="navbar8-links1">
                    <a href={link1Url} className="thq-body-small thq-link">{link1}</a>
                    <a href={link3Url} className="thq-body-small thq-link">{link3}</a>
                    <a href={link2Url} className="thq-body-small thq-link">{link2}</a>
                    <a href={link6Url} className="thq-body-small thq-link">{link6}</a>
                    <a href={link4Url} className="thq-body-small thq-link">{link4}</a>
                    <a href={link5Url} className="thq-body-small thq-link">{link5}</a>
                </nav>
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
    logoSrc: '/images/logo_notext.png',
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
