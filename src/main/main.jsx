import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider, useSelector } from 'react-redux'
import { store } from './store.js';

import BiAside from 'org/BiAside/BiAside.jsx'
import PagesContainer from 'org/PagesContainer/PagesContainer.jsx'
import Console from 'org/Console/Console.jsx'
import ConsoleTemplate from 'org/ConsoleTemplate/ConsoleTemplate.jsx'
import CustomizableContent from 'org/CustomizableContent/CustomizableContent.jsx'

import './main.css'
import './normalize.css'

function Body({children}) {
    const somethingIsResizing = useSelector(state => state.app.somethingIsResizing);
    return (
        <div style={{userSelect: somethingIsResizing ? 'none' : ''}}>
            {children} 
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Provider store={store}>
            <Body>
                <BiAside type="left-aside">
                    <Console>
                        <ConsoleTemplate />
                    </Console>
                    <CustomizableContent>
                        {/*<CustomTemplate />*/}
                    </CustomizableContent>
                </BiAside>
                <PagesContainer>
                    {/*<Page /> REACT ROUTER*/}
                </PagesContainer>
                <BiAside type="right-aside">
                    {/*<MainNav />
                    <SectionNav />*/}
                </BiAside>
            </Body>
        </Provider>
    </React.StrictMode>
)