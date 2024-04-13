import utils from '/utils.js'
import resizeProcess from './functions/resize.js'

utils.resize('.input__resize-bar', '#default > .input',
    ()=>{},
    (e)=> resizeProcess(e),
    ()=>{}
)