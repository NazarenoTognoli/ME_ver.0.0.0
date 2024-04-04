import React from 'react'
import './subsection-buttons.css'
function SubsectionButtons() {
    return (
        <nav className="r-aside__subsection">
            <div className="r-aside__subsection-resize-bar"></div>
            <div className="r-aside__subsection-body scrollbar-custom">
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
                    <span>exmp-4</span>
                </button>
                <button className="r-aside__subsection-button">
                    <span>exmp-5</span>
                </button>
            </div>
        </nav>)
}
export default SubsectionButtons