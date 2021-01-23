import styled from 'styled-components'

export const Inner = styled.h1`
    margin: ${props => props.margin || '0'};
    color: ${props => props.color || props.theme.colors.text}}
`