import React from 'react'
import { FiTerminal } from "react-icons/fi";
import { VscAdd } from "react-icons/vsc";
import './header.css'

function AddTemplate() {
    return (
        <div className="add-template">
            <button id="add-template__button">
                <VscAdd className="icon" />
            </button>
        </div>
        )
}

function TemplateScroll() {
    return (
        <div className="scrollbar-custom console-scroller">
            <button id="console-button" className="console__template-button" id="console__template-button--active">
                <FiTerminal className="icon" />
            </button>
            <button className="console__template-button console__template-button--created">
            </button>
            <button className="console__template-button console__template-button--created">
            </button>
            <button className="console__template-button console__template-button--created">
            </button>
        </div>)
}

function Header() {
    return (
        <header className="console__header">
            <TemplateScroll />
            <AddTemplate />
        </header>)
}

export default Header