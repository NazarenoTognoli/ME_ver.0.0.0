import './right-aside.css'
import React from 'react'
function RightAside() {
    return ( <aside className="r-aside">
                <button className="r-aside__button">
                    <img src="assets/img/left-arrow.png" />
                </button>
                <div className="r-aside__resize-bar"></div>
                <div className="r-aside__body">
                    <nav className="r-aside__section">
                        <button className="r-aside__section-button information-sources-handler-btn">
                            <span>Information sources handler</span>
                        </button>
                        <button className="r-aside__section-button time-management-btn">
                            <span>Time management</span>
                        </button>
                        <button className="r-aside__section-button notes-reminders-btn">
                            <span>Notes and reminders</span>
                        </button>
                        <button className="r-aside__section-button problems-resolution-btn">
                            <span>Problems resolution</span>
                        </button>
                        <button className="r-aside__section-button graphics-statistics-monitoring-btn">
                            <span>Graphics, statistics and monitoring</span>
                        </button>
                    </nav>
                    <nav className="r-aside__subsection">
                        <div className="r-aside__subsection-resize-bar"></div>
                        <div className="r-aside__subsection-body">
                            <button className="r-aside__subsection-button">
                                <span>Uncategorized</span>
                            </button>
                            <button className="r-aside__subsection-button">
                                <span>exmp-0</span>
                            </button>
                            <button className="r-aside__subsection-button">
                                <span>exmp-1</span>
                            </button>
                            <button className="r-aside__subsection-button">
                                <span>exmp-2</span>
                            </button>
                            <button className="r-aside__subsection-button">
                                <span>exmp-3</span>
                            </button>
                            <button className="r-aside__subsection-button">
                                <span>exmp-3</span>
                            </button>
                            <button className="r-aside__subsection-button">
                                <span>exmp-3</span>
                            </button>
                            <button className="r-aside__subsection-button">
                                <span>exmp-3</span>
                            </button>
                        </div>
                    </nav>  
                </div>
            </aside>
    )
}
export default RightAside