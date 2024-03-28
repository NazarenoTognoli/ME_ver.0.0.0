import { applyResizeEvent, resizeProcess } from './resize.js'
import './header/header.js'

applyResizeEvent(".console__resize-bar", ".console", 
    ()=>{},
    (e)=> resizeProcess(e),
    ()=>{}
);