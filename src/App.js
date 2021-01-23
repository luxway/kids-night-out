import React, {useState} from 'react'
import {Nav, Status} from './sections/main'
import Theme from './Theme'
import {GlobalStyle} from './GlobalStyles'
import {ChildList, EmergencyContact, Guardian, Main} from './pages'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App = () => {
    const [guardian, setGuardian] = useState({})
    const [emergency, setEmergency] = useState({})
    const [child, setChild] = useState([])

    return (
        <>
            <Theme>
                <GlobalStyle />
                <Nav />
                <Status />
                <Router>
                    <Switch>
                        <Route path="/" component={Guardian} exact />
                        <Route path="/emergency-contact" component={EmergencyContact} exact />
                        <Route path="/child" component={ChildList} exact />
                    </Switch>
                </Router>
            </Theme>
        </>
    )
}

export default App