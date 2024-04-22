import React from 'react'
import { VscAdd } from 'react-icons/vsc';

function AddButton() {
    return (
        <div className="add-template">
            <button id="add-template__button">
                <VscAdd className="icon" />
            </button>
        </div>
        )
}

export default AddButton