import React, {useContext} from 'react'
import {Button, Container, Text, Title} from '../components'
import {ChildContext} from '../App'
import {Link} from 'react-router-dom'
import {ChildrenList} from '../sections/main'

const ChildList = () => {
    const [child] = useContext(ChildContext)
    const childRegistered = child.length < 1

    return (
        <Container>
            <Title>Registered Kids</Title>
            {childRegistered ? (<ChildrenList />) : (<Text margin="25px 0">No Children Have Been Registered Yet</Text>)}
            <Button color="#49DBBB"><Link to="/add-child">Add Child</Link></Button>
            {childRegistered ? (<Button margin="25px 0"><Link to="/payment">Continue</Link></Button>) : null}
        </Container>
    )
}

export default ChildList