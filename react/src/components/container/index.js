import React from 'react'
import {Wrapper} from './styles/container'

const Container = ({children, ...restProps}) => <Wrapper {...restProps}>{children}</Wrapper>

export default Container