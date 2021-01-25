import React, {useContext, useEffect, useState} from 'react'
import PaypalExpressBtn from 'react-paypal-express-checkout'
import {Container, Title} from '../components'
import {ChildrenList} from '../sections/main'
import {ChildContext} from '../App'
import {useHistory} from 'react-router-dom'

const Payment = () => {
    const [total, setTotal] = useState(0)
    const [child] = useContext(ChildContext)
    const env = 'sandbox'
    const currency = 'USD'
    const history = useHistory()

    useEffect(() => {
        setTotal (child.length * 30)
    }, [child])

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