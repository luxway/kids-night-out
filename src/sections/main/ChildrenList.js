import React, {useContext} from 'react'
import {List} from '../../components'
import {ChildContext} from '../../App'

const ChildrenList = () => {
    const [child] = useContext(ChildContext)

    return (
        <List>
            {child.map(data => (
                <List.Item>
                    <List.Icon>{data.first_name.charAt(0) + data.last_name.charAt(0)}</List.Icon>
                    <div>
                    <List.Name>{data.first_name} {data.last_name}</List.Name>
                    <List.Age>{data.age} years old</List.Age>
                    </div>
                </List.Item>
            ))}
        </List>
    )
}

export default ChildrenList