import React from 'react'
import './output.css'
import utils from '@/utils/utils.js'
function ConsoleTemplateOutput() {
    return (
        <div className="output">
            {utils.console.System({content: "type info to seek reference."})}
        </div>)
}

export default ConsoleTemplateOutput