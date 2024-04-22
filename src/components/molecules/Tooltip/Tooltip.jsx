import React from 'react'

const config = {
    style: ({ hover, styles={} }) => ({
        width: '200%',
        position: 'absolute',
        background: '#000',
        height: '20px',
        zIndex: '200',
        transition: 'opacity .3s ease',
        pointerEvents: 'none',
        color: '#fff',
        fontSize: '9px',
        paddingTop: '4px',
        textAlign: 'center',
        borderRadius: '3px',
        boxSizing: 'border-box',
        opacity: hover ? '1' : '0',
        ...styles
    }),
    arrowStyle: ({ arrowStyles, arrowDirection }) => ({
        position: 'absolute',
        width: ['top', 'bottom'].includes(arrowDirection) ? '10px' : '5px',
        height: ['top', 'bottom'].includes(arrowDirection) ? '5px' : '10px',
        zIndex: '300',
        background: 'inherit',
        clipPath: {
            top: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            right: 'polygon(0 0, 0% 100%, 100% 50%)',
            left: 'polygon(100% 0, 0 50%, 100% 100%)',
            bottom: 'polygon(0 0, 50% 100%, 100% 0)'
        }[arrowDirection] || 'none',
        ...arrowStyles
    })
}
function Tooltip({ text, isVisible, styles, arrowStyles, arrowDirection }) {
    return (
        <div style={config.style({hover: isVisible, styles: styles})}>
            <div style={{position: 'relative', width: '100%', height: '100%', background: 'inherit'}}>
                {text}
                <div style={config.arrowStyle({arrowStyles: arrowStyles, arrowDirection: arrowDirection})}>
                </div>
            </div>
        </div>
        )
}

export default Tooltip