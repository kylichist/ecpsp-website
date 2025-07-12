import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {HelmetProvider} from 'react-helmet-async'

import './style.css'
import Home from './views/home'
import NotFound from './views/not-found'

const App = () => {
    return (
        <HelmetProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Router>
        </HelmetProvider>
    )
}

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(<App/>)
