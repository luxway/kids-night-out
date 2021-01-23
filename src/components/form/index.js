import React from 'react'
import {Wrapper, Input, TextArea, InputWrapper, RadioButton, Label, Group, Select, Option} from './styles/form'

const Form = ({children, ...restProps}) => <Wrapper {...restProps}>{children}</Wrapper>

Form.Input = ({...restProps}) => <Input {...restProps} />

Form.TextArea = ({children, ...restProps}) => <TextArea {...restProps}>{children}</TextArea>

Form.RadioButton = ({...restProps}) => <RadioButton type="radio" {...restProps} />

Form.Wrapper = ({children, ...restProps}) => <InputWrapper {...restProps}>{children}</InputWrapper>

Form.Group = ({children, ...restProps}) => <Group {...restProps}>{children}</Group>

Form.Label = ({children, ...restProps}) => <Label {...restProps}>{children}</Label>

Form.Select = ({children, ...restProps}) => <Select {...restProps}>{children}</Select>

Form.Option = ({children, ...restProps}) => <Option {...restProps}>{children}</Option>

export default Form