import './left-aside.css'
import React from 'react'
import DeveloperConsole from './console/console.jsx'
import Content from './content/content.jsx'

function Body() {
    return (
        <div className="l-aside__body">
            <DeveloperConsole />
            <Content />
        </div>
    )
}

function LeftAside() {
    return (
        <aside className="l-aside">
            <button className="l-aside__button">
                <div className="l-aside__button-tooltip tooltip">Alt + A</div>
            </button>
            
            <Body />

            <div className="l-aside__resize-bar"></div>
        </aside>
    )
}
export default LeftAside