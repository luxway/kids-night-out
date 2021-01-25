import React from 'react'
import {Wrapper, Icon, Item, Age, Name} from './styles/list'

const List = ({children, ...restProps}) => <Wrapper {...restProps}>{children}</Wrapper>

List.Item = ({children, ...restProps}) => <Item {...restProps}>{children}</Item>

List.Icon = ({children, ...restProps}) => <Icon {...restProps}>{children}</Icon>

List.Name = ({children, ...restProps}) => <Name {...restProps}>{children}</Name>

List.Age = ({children, ...restProps}) => <Age {...restProps}>{children}</Age>

export default List