import { applyResizeEvent, resizeProcess } from './resize.js'

applyResizeEvent(".console__resize-bar", ".console", 
    ()=>{},
    (e)=> resizeProcess(e),
    ()=>{}
);