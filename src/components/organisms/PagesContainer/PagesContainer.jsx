import React from 'react'
import { useSelector } from 'react-redux';

import './PagesContainer.css'

function PagesContainer() {
    const rightAsideIsToggled = useSelector((state) => state["right-aside"].isToggled)
    const leftAsideIsToggled = useSelector((state) => state["left-aside"].isToggled)

    return ( 
        <div className="pages-container" style={{filter: rightAsideIsToggled || leftAsideIsToggled ? 'brightness(50%)' : 'brightness(100%)'}}>
            <nav className="top-nav-laterals"></nav>
            <p style={{color: '#F00', textAlign: 'center', fontSize: '18px', width: '100%'}}>DENVER IS DEATH</p> 
        </div> )
}

export default PagesContainer
















//SECTION OVER HERE FOR TESTING

/*
<section class="ISH-section section">
                    <header>
                        <div class="search-input">  
                            <div class="search-input__state"></div>
                            <input class="search-input__input" type="text" name="" placeholder="Search">
                        </div>
                        <div class="add-item">
                            <div class="add-item__state"></div>
                            <input type="text" name="" class="add-item__input" placeholder="Drop Link Here">
                            <button class="add-item__button"></button>
                        </div>
                        <button class="edit-group-button">delete multiple, config, mod structure</button>
                    </header>
                    <main>
                    </main>
                </section>
*/