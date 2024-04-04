import { applyResizeEvent, resizeProcess } from './resize.js'
import './00_header/header.js'

applyResizeEvent(".console__resize-bar", ".console", 
    ()=>{},
    (e)=> resizeProcess(e),
    ()=>{}
);