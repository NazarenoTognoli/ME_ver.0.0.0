import React from 'react'
import './default.css'
import { IoIosWarning } from "react-icons/io";
import { BsXOctagonFill } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsCpuFill } from "react-icons/bs";

function Message({ Icon, iconClassName, mClass, content }) {
    let messageClass = `message ${mClass}`;
    return (
        <div className={messageClass}>
            <div className="message__symbol">
                <Icon className={iconClassName} />
            </div>
            <div className="message__text">{content}</div>
        </div>
    );
}

function Default() {
    return (
        <div id="default" className="console__template">
            <Message.System content="Type info to seek reference."/>
            {/*<SystemMessage content="System message"/>
            <ErrorMessage content="Error message"/>
            <WarningMessage content="Warning message"/>
            <WarningMessage content="Warning message n2"/>
            <CheckMessage content="Passed prove n0"/>*/}
        </div>)
}

export default Default

const Console = {
    System: function ({content}) {<Message Icon={BsCpuFill} iconClassName="icon-system" mClass = "message-system" content={content}/>},
    Warning: function ({content}) {<Message Icon={IoIosWarning} iconClassName="icon-warning" mClass = "message-warning" content={content}/>},
    Error: function ({content}) {<Message Icon={BsXOctagonFill} iconClassName="icon-error" mClass = "message-error" content={content}/>},
    Check: function ({content}) {<Message Icon={BsCheckCircleFill} iconClassName="icon-check" mClass = "message-check" content={content}/>}
}

/*

MESSAGE HANDLER SHOULD BE IN UTILS, ACCESIBLE FROM ALL PARTS OF THE ENVIRONMENT

*/