import React from 'react'
import SectionButtons from './00_section_buttons/section-buttons.jsx'
import SubsectionButtons from './01_subsection_buttons/subsection-buttons.jsx'
import './right-aside.css'
import './shared/section-buttons-group.css'

function Body() {
    return (
        <div className="r-aside__body">
            <SectionButtons/ >
            <SubsectionButtons />
        </div>
    )
}

function RightAside() {
    return ( 
        <aside className="r-aside">
            <button className="r-aside__button">
                <div className="r-aside__button-tooltip tooltip">Alt + L</div>
            </button>
            <div className="r-aside__resize-bar"></div>
            <Body />
        </aside>
    )
}
export default RightAside