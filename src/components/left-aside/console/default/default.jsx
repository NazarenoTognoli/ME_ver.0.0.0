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

const SystemMessage = ({content}) => <Message Icon={BsCpuFill} iconClassName="icon-system" mClass = "message-system" content={content}/>;
const WarningMessage = ({content}) => <Message Icon={IoIosWarning} iconClassName="icon-warning" mClass = "message-warning" content={content}/>;
const ErrorMessage = ({content}) => <Message Icon={BsXOctagonFill} iconClassName="icon-error" mClass = "message-error" content={content}/>;
const CheckMessage = ({content}) => <Message Icon={BsCheckCircleFill} iconClassName="icon-check" mClass = "message-check" content={content}/>;

function Default() {
    return (
        <div id="default" className="console__template">
            <SystemMessage content="Type info to seek reference"/>
            <SystemMessage content="System message"/>
            <ErrorMessage content="Error message"/>
            <WarningMessage content="Warning message"/>
            <WarningMessage content="Warning message n2"/>
            <CheckMessage content="Passed prove n0"/>
        </div>)
}

export default Default