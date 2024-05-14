import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setIsToggled, setWidth, setIsResizing } from '@/features/biAside/biAsideSlice.js'

import Aside from '../../atoms/Aside/Aside.jsx'
import ResizeBar from '../../atoms/ResizeBar/ResizeBar.jsx';
import Tooltip from '../../molecules/Tooltip/Tooltip.jsx';
import Button from '../../atoms/Button/Button.jsx';

import { resizeBiAside } from '@/features/resize/resizeConfig.js'

import './BiAside.css'

function BiAside({ children, type, onClick, toggledMinWidth = "6.94px", resizeBarFlexBasis = "7px" }) {
    const left = type === "left-aside";
    const dispatch = useDispatch();

    const [isButtonHovered, setIsButtonHovered] = useState(false);

    const isToggled = useSelector(state => state.biAside[left ? "leftIsToggled" : "rightIsToggled"]); 
    const setIsToggledLocal = () => dispatch(setIsToggled({left: left}));

    const width = useSelector(state => state.biAside[left ? "leftWidth" : "rightWidth"]);
    const setWidthLocal = value => dispatch(setWidth({left: left, value: value}));

    const isResizing = useSelector(state => state.biAside[left ? 'leftIsResizing' : 'rightIsResizing']);
    const setIsResizingLocal = value => dispatch(setIsResizing({left: left, value: value}));

    const body = <div 
                    className="body" 
                    style={{
                        width: `calc(100% - ${resizeBarFlexBasis})`
                    }}>
                    {children}
                </div>
    const resizeBar = <ResizeBar 
                        config={resizeBiAside(left, width, setWidthLocal, setIsResizingLocal)} 
                        style={{
                            height: '100%', 
                            flexBasis: resizeBarFlexBasis
                        }}
                      />

    const FirstChildren = () => <> { left ? body : resizeBar } </>
    const SecondChildren = () => <> { left ? resizeBar : body } </>

    return (
        <Aside 
            className={`bi-aside ${type}`}
            style={{
                minWidth: isToggled ? toggledMinWidth : "0", 
                width: isToggled ? width + "vw" : "0", 
                transition: !isResizing ? "width .3s ease" : "none"
            }}>
            <Button
                onClick={setIsToggledLocal}
                onMouseEnter={()=>{ setIsButtonHovered(true) }}
                onMouseLeave={()=>{ setIsButtonHovered(false) }}
                className={`aside-button ${isToggled ? 'button-inverted' : 'button'}`}>
                <Tooltip //TOOLTIP LATER REPLACED BY MATERIAL UI
                    isVisible={isButtonHovered}
                     text= {left ? "Alt + A" : "Alt + L"}
                     styles={left ? { top: '28px', left: '4px' } : { top: '28px', right: '4px' }} 
                     arrowStyles={left ? { top: '-9px', left: '5px' } : { top: '-9px', left: '5px' }} 
                     arrowDirection="top"/>
            </Button>
            <FirstChildren />
            <SecondChildren />
        </Aside>
    )
}

export default BiAside