import React from 'react'
import Console from './console/console.jsx'
import Content from './content/content.jsx'

function Body() {
    return (
        <div className="l-aside__body">
            <Console />
            <Content />
        </div>
    )
}

export default Body