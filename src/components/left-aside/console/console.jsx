import React from 'react'
import './console.css'
function Console() {
    return (
        <div className="console">
            <header className="console__header">
                <div className="scrollbar-custom">
                    <button id="console-button"></button>
                    <button id="add-template-button"></button>
                </div>
            </header>
            <div className="console__body">
            </div>
            <div className="console__resize-bar"></div>
        </div>)
}
export default Console