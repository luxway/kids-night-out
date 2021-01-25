import React, {useState, useEffect} from 'react'
import {Nav, Status} from './sections/main'
import Theme from './Theme'
import {GlobalStyle} from './GlobalStyles'
import {AddChild, ChildList, EmergencyContact, Guardian, Payment, Success} from './pages'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

export const GuardianContext = React.createContext(null)
export const EmergencyContext = React.createContext(null)
export const ChildContext = React.createContext(null)
export const ValidContext = React.createContext(null)

const App = () => {
    const [guardian, setGuardian] = useState({state: 'Florida'})
    const [emergency, setEmergency] = useState({})
    const [child, setChild] = useState([])
    const [valid, setValid] = useState([])

    const handleUnload = e => {
        e.preventDefault()
        e.returnValue = ''
    }

    useEffect(() => {
        window.addEventListener('beforeunload', handleUnload)

        return () => window.removeEventListener('beforeunload', handleUnload)
    })

    return (

        <>
            <Theme>
                <GlobalStyle />
                <Nav />
                <GuardianContext.Provider value={[guardian, setGuardian]}>
                    <EmergencyContext.Provider value={[emergency, setEmergency]}>
                        <ChildContext.Provider value={[child, setChild]}>
                            <ValidContext.Provider value={[valid, setValid]}>
                            <Status />
                                <Router>
                                    <Switch>
                                        <Route path="/" component={Guardian} exact />
                                        <Route path="/emergency-contact" component={EmergencyContact} exact />
                                        <Route path="/child" component={ChildList} exact />
                                        <Route path="/add-child" component={AddChild} exact />
                                        <Route path="/payment" component={Payment} exact />
                                        <Route path="/success" component={Success} exact />
                                    </Switch>
                                </Router>
                            </ValidContext.Provider>
                        </ChildContext.Provider>
                    </EmergencyContext.Provider>
                </GuardianContext.Provider>
            </Theme>
        </>
    )
}

export default App