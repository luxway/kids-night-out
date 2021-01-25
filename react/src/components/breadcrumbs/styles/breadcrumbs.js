import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    margin: 50px 0;
`

export const Item = styled.div`
    width: 25%;
    display: flex;
    position: relative;
    justify-content: center;
  
  &.line::after {
    content: '';
    width: calc(100%);
    right: -50%;
    height: 5px;
    background: linear-gradient(to left, #ccc 50%, ${props => props.theme.colors.main} 50%);
    background-size: 200% 100%;
    background-position: ${props => props.complete ? 'left bottom' : 'right bottom'};
    position: absolute;
    top: 25px;
    transition: all 2s ease;
    z-index: 1;
  }
`

export const Group = styled.div``

export const Icon = styled.div`
    height: 50px;
    width: 50px;
    background: linear-gradient(to left, #ccc 50%, ${props => props.theme.colors.main} 50%);
    background-size: 200% 100%;
    background-position: ${props => props.complete ? 'left bottom' : 'right bottom'};
    border-radius: 50%;
    margin: 0 auto;
    transition: all 1s ease;
  position: relative;
    z-index: 2;
`

export const Info  = styled.p`
    color: ${props => props.theme.colors.text};
    margin: 10px 0 0 0;
`

export const Line = styled.div`
`