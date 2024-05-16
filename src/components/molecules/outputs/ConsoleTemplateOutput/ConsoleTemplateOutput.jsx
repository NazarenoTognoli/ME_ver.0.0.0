import React from 'react';
import { useSelector } from 'react-redux';

import './output.css';

import utils from '@/utils/utils.js';

function ConsoleTemplateOutput() {
    const consoleHeight = useSelector(state => state.leftAside.consoleHeight);
    const outputHeight = useSelector(state => state.leftAside.consoleDefaultTemplateOutputHeight);
    return (
        <div className="output" style={{height: outputHeight + "%"}}>
            {utils.console.System({content: "type info to seek reference."})}
        </div>)
}

export default ConsoleTemplateOutput;