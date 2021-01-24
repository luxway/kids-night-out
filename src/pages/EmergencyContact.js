import React, {useEffect, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {Container, Text, Title} from '../components'
import {EmergencyContactForm} from '../sections/forms'
import {ValidContext} from '../App'

const EmergencyContact = () => {
    const [valid] = useContext(ValidContext)
    const history = useHistory()

    useEffect(() => {

        if (!valid.guardian) {
            history.push('/')
        }

    }, [history, valid.guardian])

    return (
        <Container>
            <Title>Emergency Contact</Title>
            <Text color="red">* Indicates required fields</Text>
            <EmergencyContactForm />
        </Container>
    )
}

export default EmergencyContact