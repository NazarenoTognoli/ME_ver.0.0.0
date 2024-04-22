import React from 'react'
import { FiTerminal } from 'react-icons/fi'

function ConsoleButton() {
    return (
        <button id="console-button" className="console__template-button" id="console__template-button--active">
                <FiTerminal className="icon" />
        </button>)
}

export default ConsoleButton