import React, {useState, useEffect} from 'react'
import uuid from 'react-uuid'
import {Nav, Status} from './sections/main'
import Theme from './Theme'
import {GlobalStyle} from './GlobalStyles'
import {AddChild, ChildList, EmergencyContact, Guardian, Payment, Success, Error} from './pages'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

export const GuardianContext = React.createContext(null)
export const EmergencyContext = React.createContext(null)
export const ChildContext = React.createContext(null)
export const ValidContext = React.createContext(null)
export const TokenContext = React.createContext(null)
export const SavedContext = React.createContext(null)

const App = () => {
    const [guardian, setGuardian] = useState({state: 'Florida'})
    const [emergency, setEmergency] = useState({})
    const [child, setChild] = useState([])
    const [valid, setValid] = useState([])
    const [token, setToken] = useState(null)
    const [saved, setSaved] = useState(false)

    const handleUnload = e => {
        e.preventDefault()
        e.returnValue = ''
    }

    useEffect(() => {
        window.addEventListener('beforeunload', handleUnload)
        setToken(uuid())

        return () => window.removeEventListener('beforeunload', handleUnload)
    }, [setToken])

    return (

        <>
            <Theme>
                <GlobalStyle />
                <Nav />
                <GuardianContext.Provider value={[guardian, setGuardian]}>
                    <EmergencyContext.Provider value={[emergency, setEmergency]}>
                        <ChildContext.Provider value={[child, setChild]}>
                            <ValidContext.Provider value={[valid, setValid]}>
                                <TokenContext.Provider value={[token]}>
                                    <SavedContext.Provider value={[saved, setSaved]}>
                                        <Status />
                                        <Router>
                                            <Switch>
                                                <Route path="/" component={Guardian} exact />
                                                <Route path="/emergency-contact" component={EmergencyContact} exact />
                                                <Route path="/child" component={ChildList} exact />
                                                <Route path="/add-child" component={AddChild} exact />
                                                <Route path="/payment" component={Payment} exact />
                                                <Route path="/success" component={Success} exact />
                                                <Route path="/error" component={Error} exact />
                                            </Switch>
                                        </Router>
                                    </SavedContext.Provider>
                                </TokenContext.Provider>
                            </ValidContext.Provider>
                        </ChildContext.Provider>
                    </EmergencyContext.Provider>
                </GuardianContext.Provider>
            </Theme>
        </>
    )
}

export default App