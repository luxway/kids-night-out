import styled from 'styled-components'

export const Wrapper = styled.form``

export const Input = styled.input`
    font-size: 18px;
    padding: 10px;
`

export const TextArea = styled.textarea`
    min-height: 150px;
    font-size: 18px;
    padding: 10px;
    resize: vertical;
`

export const RadioButton = styled.input``

export const InputWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const Label = styled.label`
    text-align: left;
    margin: 0 0 10px 0;
    color: ${props => props.theme.colors.text};
  
    span {
      color: red;
    }
`

export const Group = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 5px;
    flex: 1;
`

export const Select = styled.select`
  font-size: 18px;
  padding: 10px;
`

export const Option = styled.option``