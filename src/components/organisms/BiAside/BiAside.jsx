import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggleLeft, toggleRight } from '@/features/biAside/biAsideSlice.js'

import Aside from '../../atoms/Aside/Aside.jsx'
import ResizeBar from '../../atoms/ResizeBar/ResizeBar.jsx';
import Tooltip from '../../molecules/Tooltip/Tooltip.jsx';
import Button from '../../atoms/Button/Button.jsx';

import './BiAside.css'

function BiAside({ children, type, onClick, toggledMinWidth = "6.94px", size = "33vw", resizeBarFlexBasis = "7px" }) {
    const left = type === "left-aside";
    const dispatch = useDispatch();

    const [isButtonHovered, setIsButtonHovered] = useState(false);

    const isToggled = useSelector(state => state.biAside[left ? "leftIsToggled" : "rightIsToggled"]); 
    const setIsToggled = () => left ? dispatch(toggleLeft()) : dispatch(toggleRight());

    const body = <div className="body" style={{width: `calc(100% - ${resizeBarFlexBasis})`}}>{children}</div>
    const resizeBar = <ResizeBar style={{ height: '100%', flexBasis: resizeBarFlexBasis }}/>   

    const PrimaryComponent = () => <> { left ? body : resizeBar } </>
    const SecondaryComponent = () => <> { left ? resizeBar : body } </>
    return (
        <Aside className={`bi-aside ${type}`} style={{minWidth: isToggled ? toggledMinWidth : "0", width: isToggled ? size : "0"}}>
            <Button
                onClick={()=>{ setIsToggled() }}
                onMouseEnter={()=>{ setIsButtonHovered(true) }}
                onMouseLeave={()=>{ setIsButtonHovered(false) }}
                className={`aside-button ${isToggled ? 'button-inverted' : 'button'}`}>
                <Tooltip 
                    isVisible={isButtonHovered}
                     text= {left ? "Alt + A" : "Alt + L"}
                     styles={left ? { top: '28px', left: '4px' } : { top: '28px', right: '4px' }} 
                     arrowStyles={left ? { top: '-9px', left: '5px' } : { top: '-9px', left: '5px' }} 
                     arrowDirection="top"/>
            </Button>
            <PrimaryComponent />
            <SecondaryComponent />
        </Aside>
    )
}

export default BiAside