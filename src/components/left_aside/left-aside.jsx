import './left-aside.css'
import React from 'react'
import Console from './console/console.jsx'
import Content from './content/content.jsx'

function LeftAside() {
    return (
        <aside className="l-aside">
            <button className="l-aside__button">
                <div className="l-aside__button-tooltip tooltip">Alt + A</div>
            </button>
            <div className="l-aside__body">
                <Console />
                <Content />
            </div>
            <div className="l-aside__resize-bar"></div>
        </aside>
    )
}

export default LeftAside


function LeftAside2() {
    return (
        <aside className="l-aside">
            <button className="l-aside__button">
                <div className="l-aside__button-tooltip tooltip">Alt + A</div>
            </button>
            <div className="l-aside__body">
                <div className="console">
                    <header className="console__header">
                        <button id="before"><div></div></button>  
                        <button id="after"><div></div></button>
                        <HeaderScroll />
                        <AddTemplateButton />
                    </header>
                    <div className="console__body">
                        <div id="default" className="console__template">
                            <Output />
                            <Input />
                        </div>
                    </div>
                    <div className="console__resize-bar"></div>
                </div>
                <Content />
            </div>
            <div className="l-aside__resize-bar"></div>
        </aside>
    )
}