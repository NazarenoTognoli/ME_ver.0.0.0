import './left-aside.css'
import React from 'react'
import DeveloperConsole from './developer-console/developer-console.jsx'
function LeftAside() {
    return ( <aside className="l-aside">
                <button className="l-aside__button">
                    <img src="assets/img/right-arrow.png" />
                </button>
                <div className="l-aside__body">
                    <DeveloperConsole />
                    <div className="content">
                        <div className="resize-bar"></div>
                        <div className="body"></div>
                    </div>
                </div>
                <div className="l-aside__resize-bar"></div>
            </aside> )
}
export default LeftAside