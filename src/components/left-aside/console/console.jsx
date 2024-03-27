import React from 'react'
import './console.css'
import { FiTerminal } from "react-icons/fi";
import { VscAdd } from "react-icons/vsc";
function Console() {
    return (
        <div className="console">
            <header className="console__header">
                <div className="scrollbar-custom">
                    <button id="console-button">
                        <FiTerminal className="icon" />
                    </button>
                    <button id="add-template-button">
                        <VscAdd className="icon" />
                    </button>
                </div>
            </header>
            <div className="console__body">
                <div id="default">
                    <span>Hello World</span>
                    <span>New Statement</span>
                    <div></div>
                </div>
            </div>
            <div className="console__resize-bar"></div>
        </div>)
}
export default Console