import React from 'react'
import {useHistory} from 'react-router-dom'
import {Button, Container, Text, Title} from '../components'

const Error = () => {
    const history = useHistory()

    const handleClick = () => {
        history.push('/payment')
    }

    return (
        <Container>
            <Title>Server Error</Title>
            <Text margin="25px 0 15px 0">
                There was an error when processing your request, please try again.
            </Text>
            <Text>
                If this error continues call <a href="tel:4076559933">(407) 655-9933</a> or email <a href="mailto:bugs@luxway.org">bugs@luxway.org</a> to complete your registration
            </Text>
            <Button onClick={handleClick} margin="25px 0" valid>Try Again</Button>
        </Container>
    )
}

export default Error
