import styled from 'styled-components'

export const Inner = styled.button`
    background: ${props => props.theme.colors.main};
    color: #FFF;
    border: 0;
    font-size: 18px;
    border-radius: 50px;
    opacity: 0.8;
    transition: 0.2s;
  
    a {
      color: inherit;
      text-decoration: none;
      display: block;
      padding: 25px;
    }
  
    &:hover {
      opacity: 1;
    }
`