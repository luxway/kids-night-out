import React from 'react'
import {Container, Title, Text, Button} from '../components'
import {AddChildForm} from '../sections/forms'
import {Link} from 'react-router-dom'

const AddChild = () => {
    return (
        <Container>
            <Title>Register A Child</Title>
            <Text margin="0 0 25px 0" color="red">* Indicated required fields</Text>
            <AddChildForm />
            <Button margin="25px 0"><Link to='/child'>Add Child</Link></Button>
        </Container>
    )
}

export default AddChild