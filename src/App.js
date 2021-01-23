import React from 'react'
import {Nav} from './sections/main'
import Theme from './Theme'
import {GlobalStyle} from './GlobalStyles'

const App = () => {
    return (
        <>
            <Theme>
                <GlobalStyle />
                <Nav />
                <p>Kids Night Out</p>
            </Theme>
        </>
    )
}

export default App