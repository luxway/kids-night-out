import React from 'react'
import {Container, Text, Title} from '../components'
import {EmergencyContactForm} from '../sections/forms'

const EmergencyContact = () => {
    return (
        <Container>
            <Title>Emergency Contact</Title>
            <Text color="red">* Indicates required fields</Text>
            <EmergencyContactForm />
        </Container>
    )
}

export default EmergencyContact