import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {Button, Container, Text, Title} from '../components'
import axios from 'axios'
import {TokenContext} from '../App'

const UpdateError = () => {
    const [token] = useContext(TokenContext)
    const history = useHistory()
    const api = '/api'

    const handleClick = () => {
        axios.post(api + '/paid', {
            token: token
        }).then(response => {
            if (response.status === 200) {
                history.push('/success')
            }
        })
            .catch(response => {
                console.log(response)
                history.push('/update-error')
            })

    }

    return (
        <Container>
            <Title>Server Error</Title>
            <Text margin="25px 0 15px 0">
                You payment has been processed, however we were unable to connect to the server to finalize the registration. Please click try again.
            </Text>
            <Text>
                If this error continues call <a href="tel:4076559933">(407) 655-9933</a> or email <a href="mailto:bugs@luxway.org">bugs@luxway.org</a> to complete your registration
            </Text>
            <Button onClick={handleClick} margin="25px 0" valid>Try Again</Button>
        </Container>
    )
}

export default UpdateError
