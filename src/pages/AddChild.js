import React from 'react'
import {Container, Title, Text} from '../components'
import {AddChildForm} from '../sections/forms'

const AddChild = () => {
    return (
        <Container>
            <Title>Register A Child</Title>
            <Text margin="0 0 25px 0" color="red">* Indicated required fields</Text>
            <AddChildForm />
        </Container>
    )
}

export default AddChild