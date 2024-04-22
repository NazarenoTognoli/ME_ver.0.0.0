import React from 'react'
import { FiTerminal } from "react-icons/fi";
import { VscAdd } from "react-icons/vsc";
import './header.css'
import AddButton from '@/components/molecules/buttons/AddButton/AddButton.jsx'
import ConsoleNav from '@/components/organisms/navs/ConsoleNav/ConsoleNav.jsx'

function ConsoleHeader() {
    return (
        <header className="console__header">
            <button id="before"><div></div></button>  
            <button id="after"><div></div></button>
            <ConsoleNav />
            <AddButton />
        </header>)
}

export default ConsoleHeader

// TODO Arreglar problema de especificidad para el estilo overflow-bar de thick 0 para console-scroller