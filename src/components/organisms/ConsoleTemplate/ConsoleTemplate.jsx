import React from 'react'
import './default.css'
import ConsoleTemplateOutput from '../../molecules/outputs/ConsoleTemplateOutput/ConsoleTemplateOutput.jsx'
import ConsoleTemplateInput from '../../molecules/inputs/ConsoleTemplateInput/ConsoleTemplateInput.jsx'

function ConsoleTemplate() {
    return (
        <div id="default" className="console__template">
            <ConsoleTemplateOutput />
            <ConsoleTemplateInput />
        </div>)
}

export default ConsoleTemplate