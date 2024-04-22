import React from 'react'
import ResizeBar from '../../atoms/ResizeBar/ResizeBar.jsx'
import ConsoleHeader from '../headers/ConsoleHeader/ConsoleHeader.jsx'
import ConsoleTemplate from '../ConsoleTemplate/ConsoleTemplate.jsx'
import './console.css'

function Console() {
    return (
        <div className="console">
            <ConsoleHeader />
            <div className="console__body">
                <ConsoleTemplate />
            </div>
            <ResizeBar style={{ flexBasis: '3px', cursor: 'n-resize' }}/>
        </div>)
}

export default Console