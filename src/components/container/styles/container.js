import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    
    &.flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }
    
    @media (min-width: ${props => props.theme.media.smallTablet}) {
        width: ${props => props.theme.container.smallTablet};
    }
    
    @media (min-width: ${props => props.theme.media.largeTablet}) {
        width: ${props => props.theme.container.largeTablet};
    }
    
    @media (min-width: ${props => props.theme.media.laptop}) {
        width: ${props => props.theme.container.laptop};
    }
`