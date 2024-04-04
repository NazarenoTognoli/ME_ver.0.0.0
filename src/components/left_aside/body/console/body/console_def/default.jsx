import React from 'react'
import './default.css'
import utils from '../../../../../../utils/utils.js'


function Default() {
    return (
        <div id="default" className="console__template">
            <utils.console.System content="Type info to seek reference."/>
            {/*<SystemMessage content="System message"/>
            <ErrorMessage content="Error message"/>
            <WarningMessage content="Warning message"/>
            <WarningMessage content="Warning message n2"/>
            <CheckMessage content="Passed prove n0"/>*/}
        </div>)
}

export default Default
/*

MESSAGE HANDLER SHOULD BE IN UTILS, ACCESIBLE FROM ALL PARTS OF THE ENVIRONMENT

*/