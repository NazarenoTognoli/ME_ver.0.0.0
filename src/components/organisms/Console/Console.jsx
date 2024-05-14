import React from 'react'
import ResizeBar from '../../atoms/ResizeBar/ResizeBar.jsx'
import ConsoleHeader from '@/components/organisms/headers/ConsoleHeader/ConsoleHeader.jsx'

import { resizeConsole } from '@/features/resize/resizeConfig.js'

import './console.css'

function Console({children}) {
    return (
        <div className="console">
            <ConsoleHeader />            
            <div className="console__body">
                {children}
            </div>
            <ResizeBar 
                config={resizeConsole()}
                style={{ flexBasis: '3px', cursor: 'n-resize' }}/>
        </div>)
}

export default Console