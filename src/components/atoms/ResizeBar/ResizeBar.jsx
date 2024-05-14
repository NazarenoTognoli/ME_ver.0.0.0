import React, { useEffect } from 'react'
import resizeLogic from '@/features/resize/resizeLogic.js'

const styles = (style = {}) => ({
    background: 'var(--dark2)',
    flexBasis: '7px', //flex direction needed
    cursor: 'col-resize',
    ...style
})

function ResizeBar({ config, options, style, onClick, className, id, onMouseEnter, onMouseLeave }) {
    return (
        <div id={id}
             style={styles(style)}
             onClick={onClick}
             className={className}
             onMouseEnter={onMouseEnter}
             onMouseLeave={onMouseLeave}
             onMouseDown={resizeLogic({config, options})}
             >    
        </div>)
}

export default ResizeBar