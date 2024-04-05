import { resizeProcess } from './resize.js'
import utils from '/utils.js'
import './header/header.js'
console.log(JSON.stringify(utils))
utils.resize(".console__resize-bar", ".console", 
    ()=>{},
    (e)=> resizeProcess(e),
    ()=>{}
);