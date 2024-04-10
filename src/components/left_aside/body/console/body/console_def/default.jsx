import React from 'react'
import './default.css'
import utils from '/utils.js'
import Output from './output/output.jsx'
import Input from './input/input.jsx'

function Default() {
    return (
        <div id="default" className="console__template">
            <Output />
            <Input />
        </div>)
}
export default Default