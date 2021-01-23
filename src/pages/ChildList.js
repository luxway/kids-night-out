import React, {useContext} from 'react'
import {Button, Container, Text, Title} from '../components'
import {ChildContext} from '../App'
import {Link} from 'react-router-dom'

const ChildList = () => {
    const [child] = useContext(ChildContext)

    return (
        <Container>
            <Title>Registered Kids</Title>
            {child.length < 0 ? 'yes' : (<Text margin="25px 0">No Children Have Been Registered Yet</Text>)}
            <Button><Link to="/add-child">Add Child</Link></Button>
            {child.length < 0 ? (<Button margin="25px 0"><Link to="/payment">Continue</Link></Button>) : null}
        </Container>
    )
}

export default ChildList