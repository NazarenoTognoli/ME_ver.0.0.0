import React from 'react'
import './console.css'
import Header from './header/header.jsx'
import Default from './body/console_def/default.jsx'


function Body() {
    return (
        <div className="console__body">
            <Default />
        </div>
        )
}

function Console() {
    return (
        <div className="console">
            <Header />
            <Body />
            <div className="console__resize-bar"></div>
        </div>)
}
export default Console