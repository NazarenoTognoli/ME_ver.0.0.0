import { applyActiveStyles } from '../shared/section-buttons-group.js'
import utils from '/utils.js'
import resizeProcess from './resize.js'

applyActiveStyles("r-aside__subsection-button")

utils.resize(".r-aside__subsection-resize-bar", ".r-aside__subsection",
  (e)=>{},
  (e)=> resizeProcess(e),
  (e)=>{}
)
