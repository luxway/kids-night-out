import React from 'react'
import {Button, Container, Title, Text} from '../components'
import {Link} from 'react-router-dom'

const Main = () => {
    return (
        <Container>
            <Title>Kids Night Out</Title>
            <Text margin="25px 0">
                Click below to begin the registration for Kids Night Out.
                This form will take about 10 minutes to complete and is sepereated into three parts.
                Payment will be required at the end of the form so please be ready to complete it all in one sitting.
            </Text>
            <Button><Link to="/">Register Now!</Link></Button>
        </Container>
    )
}

export default Main