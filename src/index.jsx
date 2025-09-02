import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import './style.css'
import Home from './views/Home/home'
import NotFound from './views/NotFound/not-found'

const App = () => {
    return (<Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </Router>)
}

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(<App/>)
