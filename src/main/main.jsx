import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store.js';

import BiAside from '../components/organisms/BiAside/BiAside.jsx'
import PagesContainer from '../components/organisms/PagesContainer/PagesContainer.jsx'
import Console from '../components/organisms/Console/Console.jsx'
import CustomizableContent from '../components/organisms/CustomizableContent/CustomizableContent.jsx'

import './main.css'
import './normalize.css'

function Main() {
    return (
        <>
            <Provider store={store}>
                <BiAside type="left-aside">
                    <Console>
                        {/*<ConsoleHeader />
                        <ConsoleTemplate />*/}
                    </Console>
                    <CustomizableContent>
                        {/*<CustomTemplate />*/}
                    </CustomizableContent>
                </BiAside>
                <PagesContainer>
                    {/*<Page /> */}
                </PagesContainer>
                <BiAside type="right-aside">
                    {/*<MainNav />
                    <SectionNav />*/}
                </BiAside>
            </Provider>
        </>
    )
}

export default Main