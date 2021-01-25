import React, {useContext, useEffect, useState, useCallback} from 'react'
import axios from 'axios'
import PaypalExpressBtn from 'react-paypal-express-checkout'
import {Container, Title} from '../components'
import {ChildrenList} from '../sections/main'
import {ChildContext, TokenContext, ValidContext, GuardianContext, EmergencyContext, SavedContext} from '../App'
import {useHistory} from 'react-router-dom'

const Payment = () => {
    const [total, setTotal] = useState(0)
    const [child] = useContext(ChildContext)
    const [valid] = useContext(ValidContext)
    const [guardian] = useContext(GuardianContext)
    const [emergency] = useContext(EmergencyContext)
    const [token] = useContext(TokenContext)
    const [saved, setSaved] = useContext(SavedContext)

    const [data, setData] = useState({})
    const [paid, setPaid] = useState(false)
    const [localSave, setLocalSave] = useState(false)

    const env = 'sandbox'
    const currency = 'USD'
    const history = useHistory()
    const api = 'http://localhost:5000/api'

    useEffect(() => {
        setData(
            {
                token: token,
                type: 'save',//saved ? 'update' : 'save',
                guardian: {
                    ...guardian,
                    paid: paid
                },
                emergency: {
                    ...emergency
                },
                kids: child
            }
        )
    }, [child, emergency, guardian, paid, saved, setData, token])

    const handlePost = useCallback(
        () => {
        axios.post(api, {
            data
        })
            .then(response => {
                if (response.status === 200) {
                    console.log(response)
                }
            })
            .catch(response => {
                history.push('/error')
            })
    }, [data, history])

    useEffect(() => {
        if (data.token && !localSave) {
            handlePost()
            setSaved(true)
            setLocalSave(true)
        }

        setTotal (child.length * 30)
    }, [child, handlePost, data, setSaved, saved])

    const client = {
        sandbox: process.env.REACT_APP_PAYPAL_SANDBOX
    }

    const onSuccess = () => {
        history.push('/success')
    }

    return (
        <Container>
            <Title>Payment</Title>
            <ChildrenList />
            <Title margin="15px 0">Total: ${total}.00</Title>
            <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onSuccess={onSuccess} shipping={1} />
        </Container>
    )
}

 export default Payment