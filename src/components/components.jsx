import React, { useEffect } from 'react'

import './shared/aside-styles.css'

import Main from './main/main.jsx'
import LeftAside from './left_aside/left-aside.jsx'
import RightAside from './right_aside/right-aside.jsx'

function Components() {
    useEffect(() => {
        importScripts();
    }, [])

    const importScripts = async () => {
        await import('./main/main.js');
        await import('./left_aside/left-aside.js');
        await import('./right_aside/right-aside.js');
    };

    return (
        <>
            <LeftAside />
            <Main />
            <RightAside />
        </>
    )
}
export default Components