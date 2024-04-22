import React from 'react';

const Button = ({ children, onClick, style, className, id, onMouseEnter, onMouseLeave }) => {
    return (
        <button className={className} 
                id={id}
                style={style} 
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={onClick}>
            {children}
        </button>)
}

export default Button;
