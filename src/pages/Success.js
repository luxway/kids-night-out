import React, {useContext, useEffect} from 'react'
import {Container, Title, Text} from '../components'
import {ValidContext} from '../App'

const Success = () => {
    const [, setValid] = useContext(ValidContext)

    useEffect(() => {
        setValid(prev => (
            {
                ...prev,
                success: true
            }
        ))
    })

    return (
        <Container>
            <Title>Success</Title>
            <Text margin="25px 0 10px 0">Thank you for your payment we will see you on [insert date]</Text>
            <Text>If you have any question please email or call us.</Text>
            <Text margin="10px 0">(407) 619-6269 | brian@amazinganimalsinc.org</Text>
        </Container>
    )
}

export default Success