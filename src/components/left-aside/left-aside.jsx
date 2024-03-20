import './left-aside.css'
import React from 'react'
function LeftAside() {
    return ( <aside className="l-aside">
                <button className="l-aside__button">
                    <img src="assets/img/right-arrow.png" />
                </button>
                <div className="l-aside__body">
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
                            <div id="console">
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
                    </div>
                    <div className="content">
                        <div className="resize-bar"></div>
                        <div className="body"></div>
                    </div>
                </div>
                <div className="l-aside__resize-bar"></div>
            </aside> )
}
export default LeftAside