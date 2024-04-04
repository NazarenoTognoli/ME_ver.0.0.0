import React from 'react'
import ReactDOM from 'react-dom'
// ||REACT||ICONS||
import { IoIosWarning } from "react-icons/io";
import { BsXOctagonFill } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsCpuFill } from "react-icons/bs";

const Console = {
    output: function() {return document.getElementById("default")},
    Message: function({ Icon, iconClassName, messageClass, content }) {
        let messageClassMessage = `message ${messageClass}`;
        return (
            <div className={messageClassMessage}>
                <div className="message__symbol">
                    <Icon className={iconClassName} />
                </div>
                <div className="message__text">{content}</div>
            </div>
        );
    },
    System: function ({content}) { return
            <Console.Message 
                Icon={BsCpuFill} 
                iconClassName="icon-system" 
                messageClass = "message-system" 
                content={content}/>
            },
    Warning: function ({content}) { return
            <Console.Message 
                Icon={IoIosWarning} 
                iconClassName="icon-warning" 
                messageClass = "message-warning" 
                content={content}/>
            },
    Error: function ({content}) { return
            <Console.Message 
                Icon={BsXOctagonFill} 
                iconClassName="icon-error" 
                messageClass = "message-error" 
                content={content}/>
            },
    Check: function ({content}) { return 
            <Console.Message 
                Icon={BsCheckCircleFill} 
                iconClassName="icon-check" 
                messageClass = "message-check" 
                content={content}/>
            },
}
export default Console