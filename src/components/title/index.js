import React from 'react'
import {Inner} from './styles/title'

const Title = ({children, ...restProps}) => <Inner {...restProps}>{children}</Inner>

export default Title