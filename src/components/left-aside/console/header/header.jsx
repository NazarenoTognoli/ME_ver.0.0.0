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
                <span>00</span>
            </button>
            <button className="console__template-button console__template-button--created">
                <span>01</span>
            </button>
            <button className="console__template-button console__template-button--created">
                <span>02</span>
            </button>
            <button className="console__template-button console__template-button--created">
                <span>03</span>
            </button>
            <button className="console__template-button console__template-button--created">
                <span>04</span>
            </button>
            <button className="console__template-button console__template-button--created">
                <span>05</span>
            </button>
            <button className="console__template-button console__template-button--created">
                <span>06</span>
            </button>
            <button className="console__template-button console__template-button--created">
                <span>07</span>
            </button>
            <button className="console__template-button console__template-button--created">
                <span>08</span>
            </button>
        </div>)
}

function Header() {
    return (
        <header className="console__header">
            <button id="before"><div></div></button>  
            <button id="after"><div></div></button>
            <TemplateScroll />
            <AddTemplate />
        </header>)
}

export default Header