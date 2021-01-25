import React, {useContext, useEffect} from 'react'
import {Button, Container, Text, Title} from '../components'
import {ChildContext, ValidContext, SavedContext} from '../App'
import {useHistory} from 'react-router-dom'
import {ChildrenList} from '../sections/main'

const ChildList = () => {
    const [valid] = useContext(ValidContext)
    const [child] = useContext(ChildContext)
    const [saved] = useContext(SavedContext)
    const childRegistered = child.length > 0
    const history = useHistory()

    useEffect(() => {
        if (!valid.guardian) {
            history.push('/')
        }

        if (!valid.emergency) {
            history.push('/emergency-contact')
        }

        if (saved) {
            history.push('/payment')
        }

    }, [history, valid.guardian, valid.emergency, saved])

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