import React from 'react'
import {Form} from '../../components'

const EmergencyContactForm = () => {
    return (
        <Form>
            <Form.Wrapper>
                <Form.Group>
                    <Form.Label>First Name <span>*</span></Form.Label>
                    <Form.Input />
                </Form.Group>

                <Form.Group>
                    <Form.Label>First Name <span>*</span></Form.Label>
                    <Form.Input />
                </Form.Group>
            </Form.Wrapper>

            <Form.Wrapper>
                <Form.Group>
                    <Form.Label>Phone <span>*</span></Form.Label>
                    <Form.Input />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Alt Phone</Form.Label>
                    <Form.Input />
                </Form.Group>
            </Form.Wrapper>
        </Form>
    )
}

export default EmergencyContactForm