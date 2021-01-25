import React from 'react'
import {Inner} from './styles/button'

const Button = ({children, ...restProps}) => <Inner {...restProps}>{children}</Inner>

export default Button