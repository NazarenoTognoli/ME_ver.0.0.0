import React from 'react'
import './console.css'
import Header from './header/header.jsx'
import Default from './console_def/default.jsx'

function Console() {
    return (
        <div className="console">
            <Header />
            <div className="console__body">
                <Default />
            </div>
            <div className="console__resize-bar"></div>
        </div>)
}
export default Console