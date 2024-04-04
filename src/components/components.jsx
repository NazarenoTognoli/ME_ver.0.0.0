import React, { useEffect } from 'react'

import './shared/aside-styles.css'

import Header from './header/header.jsx'
import LeftAside from './left_aside/left-aside.jsx'
import RightAside from './right_aside/right-aside.jsx'
import Main from './main/main.jsx'

function Components() {
    useEffect(() => {
        importScripts();
    }, [])

    const importScripts = async () => {
        await import('./header/header.js');
        await import('./right_aside/right-aside.js');
        await import('./main/main.js');
        await import('./left_aside/left-aside.js');
    };

    return (
        <>
            <Header />
            <div id="body">
                <LeftAside />
                <Main />
                <RightAside />
            </div>
        </>
    )
}
export default Components