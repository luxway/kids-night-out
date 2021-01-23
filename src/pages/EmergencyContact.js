import React from 'react'
import {Button, Container, Text, Title} from '../components'
import {EmergencyContactForm} from '../sections/forms'
import {Link} from 'react-router-dom'

const EmergencyContact = () => {
    return (
        <Container>
            <Title>Emergency Contact</Title>
            <Text color="red">* Indicates required fields</Text>
            <EmergencyContactForm />
            <Button margin="25px 0"><Link to="/child">Continue</Link></Button>
        </Container>
    )
}

export default EmergencyContact