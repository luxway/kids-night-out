import React, {useContext, useEffect, useState} from 'react'
import {Button, Form, Text} from '../../components'
import {ChildContext, ValidContext} from '../../App'
import {useHistory} from 'react-router-dom'
import childValidation from '../../forms/childValidation'

const AddChildForm = () => {
    const [, setTotalChildren] = useContext(ChildContext)
    const [valid, setValid] = useContext(ValidContext)
    const history = useHistory()
    const [child, setChild] = useState({})
    const [errors, setErrors] = useState([])

    useEffect(() => {
        setChild({})
    }, [])

    useEffect(() => {
        const validation = childValidation(child)
        if (Object.keys(validation).length > 0) {
            setValid(prev => (
                {
                    ...prev,
                    child: false
                }
            ))
        } else {
            setValid(prev => (
                {
                    ...prev,
                    child: true
                }
            ))
        }
    }, [child, setValid])

    const handleChange = e => {
        e.persist()
        setChild(prev => (
                {
                    ...prev,
                    [e.target.name]: e.target.value

                }
        ))
    }

    const handleClick = () => {
        if (valid.child) {
            setTotalChildren(prev => (
                [
                    ...prev,
                    child
                ]
            ))
            history.push('/child')
        } else {
            const errorList = childValidation(child)
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
                        <Form.Input name="first_name" onChange={handleChange} value={child.first_name || ''} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Last Name <span>*</span></Form.Label>
                        <Form.Input name="last_name" onChange={handleChange} value={child.last_name || ''} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Age <span>*</span></Form.Label>
                        <Form.Select name="age" onChange={handleChange} value={child.age || ''}>
                            <Form.Option defaultValue hidden>Select One</Form.Option>
                            <Form.Option value="6">6</Form.Option>
                            <Form.Option value="7">7</Form.Option>
                            <Form.Option value="8">8</Form.Option>
                            <Form.Option value="9">9</Form.Option>
                            <Form.Option value="10">10</Form.Option>
                            <Form.Option value="11">11</Form.Option>
                            <Form.Option value="12">12</Form.Option>
                        </Form.Select>
                    </Form.Group>
                </Form.Wrapper>

                <Form.Group>
                    <Form.Label>Known Allergies <span>*</span> (If none, write "none")</Form.Label>
                    <Form.TextArea name="allergies" onChange={handleChange} value={child.allergies || ''} />
                </Form.Group>

                <Text margin="25px 0 10px 0">Pizza and Kool Aid willd be servered for dinner.</Text>
                <Form.Label>If your child has any dietary restrictions, please mark the apporiate option below. <span>*</span></Form.Label>
                <Form.Group>
                    <Form.Select name="food" onChange={handleChange} value={child.food || ''}>
                        <Form.Option defaultValue hidden>Select One</Form.Option>
                        <Form.Option value="yes"> Yes, I am okay with the food choice above.</Form.Option>
                        <Form.Option value="no">No, I will send my child with a packed dinner.</Form.Option>
                    </Form.Select>
                </Form.Group>
            </Form>
            <Button valid={valid.child} onClick={handleClick} margin="25px 0">Add Child</Button>
        </>
    )
}

export default AddChildForm