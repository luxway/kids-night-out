import React, {useContext, useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Button, Form} from '../../components'
import {GuardianContext, ValidContext} from '../../App'
import guardianValidation from '../../forms/guardianValidation'

const GuardianForm = () => {
    const states = ['Florida', 'Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
    const [guardian, setGuardian] = useContext(GuardianContext)
    const [valid, setValid] = useContext(ValidContext)
    const history = useHistory()
    const [errors, setErrors] = useState([])

    useEffect(() => {
        const validation = guardianValidation(guardian)
        if (Object.keys(validation).length > 0) {
            setValid(prev => (
                {
                    ...prev,
                    guardian: false
                }
            ))
        } else {
            setValid(prev => (
                {
                    ...prev,
                    guardian: true
                }
            ))
        }
    }, [guardian, setValid])

    const handleChange = e => {
        e.persist()
        setGuardian(prev => (
            {
                ...prev,
                [e.target.name]: e.target.value
            }
        ))
    }

    const handleClick = () => {
        if (valid.guardian) {
            history.push('/emergency-contact')
        } else {
            const errorList = guardianValidation(guardian)
            const errorTmp = []
            for (let key in guardianValidation(guardian)) {
                errorTmp.push(errorList[key])
            }
            setErrors(errorTmp)
        }
    }

    return (
        <>
            <Form>
                {errors.map(error => (
                    <p>{error}</p>
                ))}
                <Form.Wrapper>
                    <Form.Group>
                        <Form.Label>First Name <span>*</span></Form.Label>
                        <Form.Input name="first_name" onChange={handleChange} value={guardian.first_name || ''} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Last Name <span>*</span></Form.Label>
                        <Form.Input name="last_name" onChange={handleChange} value={guardian.last_name || ''} />
                    </Form.Group>
                </Form.Wrapper>

                <Form.Group>
                    <Form.Label>Address <span>*</span></Form.Label>
                    <Form.Input name="address" onChange={handleChange} value={guardian.address || ''} />
                </Form.Group>

                <Form.Wrapper>
                    <Form.Group>
                        <Form.Label>City <span>*</span></Form.Label>
                        <Form.Input name="city" onChange={handleChange} value={guardian.city || ''} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>State <span>*</span></Form.Label>
                        <Form.Select name="state" onChange={handleChange}>
                            {states.map(state => (
                                <Form.Option defaultValue={state === guardian.state} value={state} key={state}>{state}</Form.Option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Zip Code <span>*</span></Form.Label>
                        <Form.Input name="zip" onChange={handleChange} value={guardian.zip || ''} />
                    </Form.Group>
                </Form.Wrapper>

                <Form.Group>
                    <Form.Label>Email <span>*</span></Form.Label>
                    <Form.Input name="email" onChange={handleChange} value={guardian.email || ''} />
                </Form.Group>

                <Form.Wrapper>
                    <Form.Group>
                        <Form.Label>Phone <span>*</span></Form.Label>
                        <Form.Input name="phone" onChange={handleChange} value={guardian.phone || ''} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Alt Phone</Form.Label>
                        <Form.Input name="alt_phone" onChange={handleChange} value={guardian.alt_phone || ''} />
                    </Form.Group>
                </Form.Wrapper>
            </Form>
            <Button valid={valid.guardian} onClick={handleClick} margin="25px 0">Continue</Button>
        </>
    )
}

export default GuardianForm