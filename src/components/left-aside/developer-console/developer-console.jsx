import React from 'react'
import './developer-console.css'
function DeveloperConsole() {
    return (
        <div className="developer-console">
            <header className="header">
                    <button className="developer-console__header-button">
                    </button>
                    <section className="developer-console__header-section">
                        <span><a className="console-btn console-btn--active">console</a><a className="templates-btn">templates</a></span>
                        <button></button>
                    </section>
            </header>
            <div className="body">
                <div id="console" className="scrollbar-custom">
                    <div className="records">
                        <div className="record">~ System type "info" for seeking reference</div>
                    </div>
                    <textarea></textarea>
                </div>
                <div id="templates">
                    <div className="background"></div>
                    <article className="panel"></article>   
                </div>
            </div>
        </div>)
}
export default DeveloperConsole