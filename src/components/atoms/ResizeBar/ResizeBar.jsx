import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { setSomethingIsResizing } from '@/features/slices/appSlice.js'
import resizeLogic from '@/features/resize/resizeLogic.js'

const styles = (style = {}) => ({
    background: 'var(--dark2)',
    flexBasis: '7px', //flex direction needed
    cursor: 'col-resize',
    ...style
})

function ResizeBar({ config, options, style, onClick, className, id, onMouseEnter, onMouseLeave }) {
    const dispath = useDispatch()
    const handleOnMouseDown = () => {
        resizeLogic({ config, options })()
        dispath(setSomethingIsResizing(true))
    }
    const handleOnMouseUp = () => {
        dispath(setSomethingIsResizing(false))
    }
    return (
        <div id={id}
             style={styles(style)}
             onClick={onClick}
             className={className}
             onMouseEnter={onMouseEnter}
             onMouseLeave={onMouseLeave}
             onMouseDown={handleOnMouseDown}
             onMouseUp={handleOnMouseUp}
             >    
        </div>)
}

export default ResizeBar