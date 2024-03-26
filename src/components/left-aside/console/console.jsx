import React from 'react'
import './console.css'
import { BsTerminal } from "react-icons/bs";
import { VscAdd } from "react-icons/vsc";function Console() {
    return (
        <div className="console">
            <header className="console__header">
                <div className="scrollbar-custom">
                    <button id="console-button">
                        <BsTerminal className="icon" />
                    </button>
                    <button id="add-template-button">
                        <VscAdd className="icon" />
                    </button>
                </div>
            </header>
            <div className="console__body">
            </div>
            <div className="console__resize-bar"></div>
        </div>)
}
export default Console