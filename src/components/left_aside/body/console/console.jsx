import React from 'react'
import './console.css'
import Header from './header/header.jsx'
import Body from './body/body.jsx'

function Console() {
    return (
        <div className="console">
            <Header />
            <Body />
            <div className="console__resize-bar"></div>
        </div>)
}
export default Console