import React from 'react'
import {Container, Title, Text, Button} from '../components'
import {GuardianForm} from '../sections/forms'
import {Link} from 'react-router-dom'

const Guardian = () => {
    return (
        <Container>
            <Title margin="0 0 5px 0">Guardian Form</Title>
            <Text margin="0 0 25px 0" color="red">* Indicates required fields</Text>
            <GuardianForm />
            <Button margin="25px 0"><Link to="/emergency-contact">Continue</Link></Button>
        </Container>
    )
}

export default Guardian