import { resizeProcess } from './resize.js'
import utils from '/utils.js'
import './header/header.js'
import './body/body.js'

utils.resize(".console__resize-bar", ".console", 
    ()=>{},
    (e)=> resizeProcess(e),
    ()=>{}
);