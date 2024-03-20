import React, { useEffect } from 'react'
import Header from './header/header.jsx'
import LeftAside from './left-aside/left-aside.jsx'
import RightAside from './right-aside/right-aside.jsx'
import Main from './main/main.jsx'

function Components() {
    useEffect(() => {
        importScripts();
    }, [])

    const importScripts = async () => {
        await import('./header/header.js');
        await import('./right-aside/right-aside.js');
        await import('./main/main.js');
        await import('./left-aside/left-aside.js');
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