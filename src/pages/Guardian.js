import React from 'react'
import {Container, Title, Text} from '../components'
import {GuardianForm} from '../sections/forms'

const Guardian = () => {
    return (
        <Container>
            <Title margin="0 0 5px 0">Guardian Info</Title>
            <Text margin="0 0 25px 0" color="red">* Indicates required fields</Text>
            <GuardianForm />
        </Container>
    )
}

export default Guardian