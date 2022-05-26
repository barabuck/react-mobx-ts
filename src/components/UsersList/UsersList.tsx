import React, { FC } from 'react'
import { List } from 'antd'
import IUser from '../../models/IUser'
import Spinner from '../Spinner/Spinner'

import './user-list.scss'

interface Props {
    data: IUser[],
    loading: boolean,
    onClick: Function
}

const UsersList: FC<Props> = (props: Props) => {

    const onUser = ( id: number ) => props.onClick(id)

    return (
        props.loading
        ?
        <Spinner />
        :
        <List
            size = 'large'
            dataSource = { props.data }
            renderItem = { item => (
                <List.Item>
                    <List.Item.Meta 
                        title = { <p className='user-list__link' onClick = { () => onUser(item.id) } >{ item.name }</p> }
                        description = { item.email }
                    />
                </List.Item>
            )}
        />
    )
}

export default UsersList
