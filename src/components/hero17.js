import React, {Fragment, useEffect, useState} from 'react'
import PropTypes from 'prop-types'

import './hero17.css'

const Hero17 = (props) => {
    const [text, setText] = useState('')

    useEffect(() => {
        fetch('/text/hero_desc.txt')
            .then((res) => res.text())
            .then((data) => setText(data))
            .catch((err) => console.error('Ошибка загрузки текста:', err))
    }, [])

    return (
        <div id="about" className="hero17-header78">
            <div className="hero17-column thq-section-padding thq-section-max-width">
                <div className="hero17-content">
                    <div
                        style={{
                            width: '100%',
                            maxWidth: '600px',
                            height: '350px',
                            backgroundImage: 'url("/images/logo.png")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            marginBottom: '32px',
                        }}
                    />
                    <h1 className="hero17-text1 thq-heading-1">
                        <Fragment>
                <span className="hero17-text3">
                  Добро пожаловать в ООО «ЭЦ«ПСП»!
                </span>
                        </Fragment>
                    </h1>
                    <p className="hero17-text2 thq-body-large">

                        <Fragment>
                <pre className="hero17-text4" style={{
                    whiteSpace: 'pre-wrap',
                    fontFamily: 'inherit',
                    textAlign: 'center',
                }}>
                  {text}
                </pre>
                        </Fragment>

                    </p>
                </div>
                <div className="hero17-actions"></div>
            </div>
            <div>
                <div className="hero17-container2 hero17-scroll-animation"/>
            </div>
        </div>
    )
}

Hero17.defaultProps = {
    content1: undefined,
    heading1: undefined,
}

Hero17.propTypes = {
    content1: PropTypes.element,
    heading1: PropTypes.element,
}

export default Hero17
