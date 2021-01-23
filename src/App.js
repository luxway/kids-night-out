import React from 'react'
import {Nav} from './sections/main'
import Theme from './Theme'
import {GlobalStyle} from './GlobalStyles'
import {Main} from './pages'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App = () => {
    return (
        <>
            <Theme>
                <GlobalStyle />
                <Nav />
                <Router>
                    <Switch>
                        <Route to="/" component={Main} exact />
                    </Switch>
                </Router>
            </Theme>
        </>
    )
}

export default App