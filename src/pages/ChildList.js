import React, {useContext} from 'react'
import {Button, Container, Text, Title} from '../components'
import {ChildContext} from '../App'
import {useHistory} from 'react-router-dom'
import {ChildrenList} from '../sections/main'

const ChildList = () => {
    const [child] = useContext(ChildContext)
    const childRegistered = child.length > 0
    const history = useHistory()

    const handleAddClick = () => {
        history.push('/add-child')
    }

    const handleContinueClick = () => {
        history.push('/payment')
    }

    return (
        <Container>
            <Title>Registered Kids</Title>
            {childRegistered ? (<ChildrenList />) : (<Text margin="25px 0">No Children Have Been Registered Yet</Text>)}
            <Button onClick={handleAddClick} color="#49DBBB" valid>Add Child</Button>
            {childRegistered ? (<Button onClick={handleContinueClick} valid margin="25px 0">Continue</Button>) : null}
        </Container>
    )
}

export default ChildList