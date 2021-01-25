import React from 'react'
import {Wrapper, Item, Icon, Info, Line, Group} from './styles/breadcrumbs'

const Breadcrumbs = ({children, ...restProps}) => <Wrapper {...restProps}>{children}</Wrapper>

Breadcrumbs.Item = ({children, ...restProps}) => <Item {...restProps}>{children}</Item>

Breadcrumbs.Group = ({children, ...restProps}) => <Group {...restProps}>{children}</Group>

Breadcrumbs.Icon = ({children, ...restProps}) => <Icon {...restProps}>{children}</Icon>

Breadcrumbs.Info = ({children, ...restProps}) => <Info {...restProps}>{children}</Info>

Breadcrumbs.Line = ({...restProps}) => <Line {...restProps} />

export default Breadcrumbs