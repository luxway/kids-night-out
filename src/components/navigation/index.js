import React from 'react'
import {Inner} from './styles/navigation'

const Navigation = ({children, ...restProps}) => <Inner {...restProps}>{children}</Inner>

export default Navigation