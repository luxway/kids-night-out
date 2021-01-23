import styled from 'styled-components'

export const Wrapper = styled.ul`
    display: flex;
    justify-content: center;
    margin: 25px 0;
    flex-wrap: wrap;
`

export const Item = styled.li`
    list-style: none;
    margin: 10px 20px;
    background: #E6F4F1;
    padding: 15px;
    display: flex;
    border-radius: 10px;
    align-items: center;
`

export const Icon = styled.div`
    height: 50px;
    width: 50px;
    background: ${props => props.theme.colors.main};
    color: #FFF;
    border-radius: 50%;
    line-height: 50px;
    margin-right: 30px;
`

export const Name = styled.p`
    text-align: left;
    padding-right: 15px;
    color: ${props => props.theme.colors.text};
`

export const Age = styled.p`
    text-align: left;
    padding-right: 15px;
    color: ${props => props.theme.colors.text};
`