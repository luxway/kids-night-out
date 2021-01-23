import React from 'react'
import {Form} from '../../components'

const GuardianForm = () => {
    const states = ['Florida', 'Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']


    return (
        <>
            <Form>
                <Form.Wrapper>
                    <Form.Group>
                        <Form.Label>First Name <span>*</span></Form.Label>
                        <Form.Input />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Last Name <span>*</span></Form.Label>
                        <Form.Input />
                    </Form.Group>
                </Form.Wrapper>

                <Form.Group>
                    <Form.Label>Address <span>*</span></Form.Label>
                    <Form.Input />
                </Form.Group>

                <Form.Wrapper>
                    <Form.Group>
                        <Form.Label>City <span>*</span></Form.Label>
                        <Form.Input />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>State <span>*</span></Form.Label>
                        <Form.Select>
                            {states.map(state => (
                                <Form.Option key={state}>{state}</Form.Option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Zip Code <span>*</span></Form.Label>
                        <Form.Input />
                    </Form.Group>
                </Form.Wrapper>

                <Form.Group>
                    <Form.Label>Email <span>*</span></Form.Label>
                    <Form.Input />
                </Form.Group>

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
        </>
    )
}

export default GuardianForm