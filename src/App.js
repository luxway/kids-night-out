import React from 'react'
import {Nav, Status} from './sections/main'
import Theme from './Theme'
import {GlobalStyle} from './GlobalStyles'
import {Guardian, Main} from './pages'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App = () => {
    return (
        <>
            <Theme>
                <GlobalStyle />
                <Nav />
                <Status />
                <Router>
                    <Switch>
                        <Route path="/" exact component={Main} />
                        <Route path="/guardian" component={Guardian} exact />
                    </Switch>
                </Router>
            </Theme>
        </>
    )
}

export default App