import React from 'react'

const Aside = ({ children, onClick, style, className, id, onMouseEnter, onMouseLeave }) => {
    return (
        <aside className={className} 
                id={id}
                style={style} 
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={onClick}>
            {children}
        </aside>)
}

export default Aside