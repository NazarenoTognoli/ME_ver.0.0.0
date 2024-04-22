import React from 'react'

import ConsoleButton from '@/components/molecules/buttons/ConsoleButton/ConsoleButton.jsx'

function HeaderScroll() {
    return (
        <div className="console-scroller">
            <ConsoleButton />
            {/*HERE ARE DISPLAYED THE NEW TEMPLATES CREATED*/}
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

export default HeaderScroll