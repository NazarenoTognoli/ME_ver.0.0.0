import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import ResizeBar from '../../atoms/ResizeBar/ResizeBar.jsx'
import ConsoleHeader from '@/components/organisms/headers/ConsoleHeader/ConsoleHeader.jsx'

import { setConsoleHeight, setCustomizableContentHeight } from 'slice/leftAsideSlice.js'

import { resizeConsole } from '@/features/resize/resizeConfig.jsx'

import './console.css'

function Console({children}) {
    const dispatch = useDispatch()
    const consoleHeight = useSelector(state => state.leftAside.consoleHeight);
    
    const setConsoleHeightLocal = value => dispatch(setConsoleHeight(value));
    const setCustomizableContentHeightLocal = value => dispatch(setCustomizableContentHeight(value));
    
    return (
        <div className="console" style={{height: consoleHeight + '%'}}>
            <ConsoleHeader />
            {/*BODY HAS CONSOLEHEIGHT% - 43PX*/}
            <div className="console__body">
                {children}
            </div>
            <ResizeBar
                config={resizeConsole({
                    consoleHeight: consoleHeight, 
                    setConsoleHeight: setConsoleHeightLocal,
                    setCustomizableContentHeight: setCustomizableContentHeightLocal 
                })}
                style={{ flexBasis: '5px', cursor: 'n-resize' }}/>
        </div>)
}

export default Console