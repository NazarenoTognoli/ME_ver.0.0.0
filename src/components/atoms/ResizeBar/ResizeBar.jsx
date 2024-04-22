import React from 'react'

const styles = (style = {}) => ({
    background: 'var(--dark2)',
    flexBasis: '7px', //flex direction needed
    cursor: 'col-resize',
    ...style
})

function ResizeBar({ style, onClick, className, id, onMouseEnter, onMouseLeave }) {
    return (
        <div id={id}
             style={styles(style)} 
             onClick={onClick}
             className={className}
             onMouseEnter={onMouseEnter}
             onMouseLeave={onMouseLeave}
             >    
        </div>)
}

export default ResizeBar