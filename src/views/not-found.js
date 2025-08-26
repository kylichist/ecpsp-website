import React from 'react'

import {Helmet} from 'react-helmet-async'

import './not-found.css'

const NotFound = () => {
    return (
        <div className="not-found-container1">
            <Helmet>
                <title>404 - Not Found</title>
            </Helmet>
            <h3>СТРАНИЦА НЕ НАЙДЕНА</h3>
            <div className="not-found-container2">
                <h1 className="not-found-text2">404</h1>
            </div>
            <div className="not-found-container3">
                <h2 className="not-found-text3">
                    НАМ ЖАЛЬ, НО ТАКОЙ СТРАНИЦЫ НЕ СУЩЕСТВУЕТ
                </h2>
            </div>
        </div>
    )
}

export default NotFound
