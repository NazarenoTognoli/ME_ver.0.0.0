import { toggleState } from './toggle-state.js'
import { applyResizeEvent, start, resizeProcess, end } from './resize.js'
import * as subsection from './subsection/resize-subsection.js'

let clickToggle = document.querySelector(".r-aside__button");

clickToggle.addEventListener('click', ()=>{
  toggleState()
})

applyResizeEvent(".r-aside__resize-bar", ".r-aside",
  (e)=> start(e),
  (e)=> resizeProcess(e),
  (e)=> end(e)
)

applyResizeEvent(".r-aside__subsection-resize-bar", ".r-aside__subsection",
  (e)=>{},
  (e)=> subsection.resizeProcess(e),
  (e)=>{}
)