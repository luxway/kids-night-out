import React from 'react'
import {Form, Text} from '../../components'

const AddChildForm = () => {
    return (
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

                <Form.Group>
                    <Form.Label>Age <span>*</span></Form.Label>
                    <Form.Select>
                        <Form.Option disabled>Select One</Form.Option>
                        <Form.Option>6</Form.Option>
                        <Form.Option>7</Form.Option>
                        <Form.Option>8</Form.Option>
                        <Form.Option>9</Form.Option>
                        <Form.Option>10</Form.Option>
                        <Form.Option>11</Form.Option>
                        <Form.Option>12</Form.Option>
                    </Form.Select>
                </Form.Group>
            </Form.Wrapper>

            <Form.Group>
                <Form.Label>Known Allergies <span>*</span> (If none, write "none")</Form.Label>
                <Form.TextArea />
            </Form.Group>

            <Text margin="25px 0 10px 0">Pizza and Kool Aid willd be servered for dinner.</Text>
            <Form.Label>If your child has any dietary restrictions, please mark the apporiate option below. <span>*</span></Form.Label>
            <Form.Group>
                <Form.Select>
                    <Form.Option name="yes"> Yes, I am okay with the food choice above.</Form.Option>
                    <Form.Option name="no">No, I will send my child with a packed dinner.</Form.Option>
                </Form.Select>
            </Form.Group>
        </Form>
    )
}

export default AddChildForm