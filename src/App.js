import React, {useState} from 'react'
import {Nav, Status} from './sections/main'
import Theme from './Theme'
import {GlobalStyle} from './GlobalStyles'
import {AddChild, ChildList, EmergencyContact, Guardian} from './pages'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

export const GuardianContext = React.createContext(null)
export const EmergencyContext = React.createContext(null)
export const ChildContext = React.createContext(null)

const App = () => {
    const [guardian, setGuardian] = useState({})
    const [emergency, setEmergency] = useState({})
    const [child, setChild] = useState([])

    return (
        <>
            <Theme>
                <GlobalStyle />
                <Nav />
                <GuardianContext.Provider value={[guardian, setGuardian]}>
                    <EmergencyContext.Provider value={[emergency, setEmergency]}>
                        <ChildContext.Provider value={[child, setChild]}>
                            <Status />
                            <Router>
                                <Switch>
                                    <Route path="/" component={Guardian} exact />
                                    <Route path="/emergency-contact" component={EmergencyContact} exact />
                                    <Route path="/child" component={ChildList} exact />
                                    <Route path="/add-child" component={AddChild} exact />
                                </Switch>
                            </Router>
                        </ChildContext.Provider>
                    </EmergencyContext.Provider>
                </GuardianContext.Provider>
            </Theme>
        </>
    )
}

export default App