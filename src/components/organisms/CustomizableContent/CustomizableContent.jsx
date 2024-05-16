import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import './content.css'

function CustomizableContent() {
    const customizableContentHeight = useSelector(state => state.leftAside.customizableContentHeight);
    return ( 
        <div 
            className="content"
            style={{height: customizableContentHeight + "%"}}>
        </div> 
    );
}

export default CustomizableContent