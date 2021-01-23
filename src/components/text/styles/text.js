import styled from 'styled-components'

export const Inner = styled.p`
  margin: ${props => props.margin || '0'};
  color: ${props => props.color || props.theme.colors.text}}
`