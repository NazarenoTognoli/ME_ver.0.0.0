import React from 'react'
import './section-buttons.css'

function SectionButtons() {
    return (
        <nav className="r-aside__section scrollbar-custom">
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
        </nav>)
}
export default SectionButtons