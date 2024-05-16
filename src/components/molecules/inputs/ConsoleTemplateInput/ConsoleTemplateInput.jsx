import React from 'react';
import ResizeBar from 'atom/ResizeBar/ResizeBar.jsx';
import { useSelector, useDispatch } from 'react-redux';

import { setConsoleDefaultTemplateInputHeight, setConsoleDefaultTemplateOutputHeight } from 'slice/leftAsideSlice.js';

import { resizeConsoleTemplateInput } from '@/features/resize/resizeConfig.jsx';

import { toPixels, toPercentage } from '@/utils/utils.js';

import './input.css';

function ConsoleTemplateInput() {
    const dispatch = useDispatch();
    const consoleHeight = useSelector(state => state.leftAside.consoleHeight);
    const inputHeight = useSelector(state => state.leftAside.consoleDefaultTemplateInputHeight);

    const setInputHeight = value => dispatch(setConsoleDefaultTemplateInputHeight(value));
    const setOutputHeight = value => dispatch(setConsoleDefaultTemplateOutputHeight(value));

    return (
        <div className="input" style={{height: inputHeight + "%"}}>
            <ResizeBar 
                style={{ 
                    flexBasis: '3px', 
                    cursor: 'n-resize' 
                }} 
                className="input__resize-bar"
                config={resizeConsoleTemplateInput({
                    allHeight: ()=> toPixels(window.innerHeight)(consoleHeight) - 43,
                    inputHeight: inputHeight,
                    setInputHeight:setInputHeight,
                    setOutputHeight: setOutputHeight 
                })}
                options={{}}>
            </ResizeBar>
            <textarea className="body" name="console-template-input">
            </textarea>
        </div>)
};

export default ConsoleTemplateInput;