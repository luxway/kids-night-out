import React, {useContext, useEffect, useState} from 'react'
import {Button, Form} from '../../components'
import {EmergencyContext, ValidContext} from '../../App'
import {useHistory} from 'react-router-dom'
import emergencyValidation from '../../forms/emergencyValidation'

const EmergencyContactForm = () => {
    const [emergency, setEmergency] = useContext(EmergencyContext)
    const [valid, setValid] = useContext(ValidContext)
    const history = useHistory()
    const [errors, setErrors] = useState([])

    useEffect(() => {
        const validation = emergencyValidation(emergency)
        if (Object.keys(validation).length > 0) {
            setValid(prev => (
                {
                    ...prev,
                    emergency: false
                }
            ))
        } else {
            setValid(prev => (
                {
                    ...prev,
                    emergency: true
                }
            ))
        }
    }, [emergency, setValid])

    const handleChange = e => {
        e.persist()
        setEmergency(prev => (
            {
                ...prev,
                [e.target.name]: e.target.value
            }
        ))
    }

    const handleClick = () => {
        if (valid.emergency) {
            history.push('/child')
        } else {
            const errorList = emergencyValidation(emergency)
            const errorTmp = []
            for (let key in errorList) {
                errorTmp.push(errorList[key])
            }
            setErrors(errorTmp)
        }
    }

    return (
        <>
            <Form>
                {errors.length > 0 ? (
                    <Form.Errors>
                        {errors[0]}
                    </Form.Errors>
                ) : null}
                <Form.Wrapper>
                    <Form.Group>
                        <Form.Label>First Name <span>*</span></Form.Label>
                        <Form.Input name="first_name" onChange={handleChange} value={emergency.first_name || ''} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Last Name <span>*</span></Form.Label>
                        <Form.Input name="last_name" onChange={handleChange} value={emergency.last_name || ''} />
                    </Form.Group>
                </Form.Wrapper>

                <Form.Wrapper>
                    <Form.Group>
                        <Form.Label>Phone <span>*</span></Form.Label>
                        <Form.Input type="tel" name="phone" onChange={handleChange} value={emergency.phone || ''} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Alt Phone</Form.Label>
                        <Form.Input type="tel" name="alt_phone" onChange={handleChange} value={emergency.alt_phone || ''} />
                    </Form.Group>
                </Form.Wrapper>
            </Form>
            <Button valid={valid.emergency} onClick={handleClick} margin="25px 0">Continue</Button>
        </>
    )
}

export default EmergencyContactForm