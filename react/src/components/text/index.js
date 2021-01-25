import React from 'react'
import {Inner} from './styles/text'

const Text = ({children, ...restProps}) => <Inner {...restProps}>{children}</Inner>

export default Text