import React from 'react'
import './console.css'
import Header from './00_header/header.jsx'
import Default from './01_body/00_default/default.jsx'


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