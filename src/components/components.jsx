import React, { useEffect } from 'react'

import './shared/aside-styles.css'

import Main from './00_main/main.jsx'
import LeftAside from './01_left_aside/left-aside.jsx'
import RightAside from './02_right_aside/right-aside.jsx'

function Components() {
    useEffect(() => {
        importScripts();
    }, [])

    const importScripts = async () => {
        await import('./00_main/main.js');
        await import('./01_left_aside/left-aside.js');
        await import('./02_right_aside/right-aside.js');
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