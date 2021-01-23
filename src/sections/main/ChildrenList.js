import React from 'react'
import {List} from '../../components'

const ChildrenList = () => {
    return (
        <List>
            <List.Item>
                <List.Icon>NP</List.Icon>
                <div>
                    <List.Name>Nico Plyley</List.Name>
                    <List.Age>24 years old</List.Age>
                </div>
            </List.Item>

            <List.Item>
                <List.Icon>BG</List.Icon>
                <div>
                    <List.Name>Blakely Graddy</List.Name>
                    <List.Age>25 years old</List.Age>
                </div>
            </List.Item>
        </List>
    )
}

export default ChildrenList