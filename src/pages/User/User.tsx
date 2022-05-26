import React, { FC, useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import UserCard from '../../components/UserCard/UserCard'
import { Divider } from 'antd'
import { useParams } from 'react-router-dom'
import UserStore from '../../store/UserStore'


const User: FC = observer(() => {
    const [ userStore ] = useState( () => new UserStore() )
    const { id } = useParams()

    useEffect( () => { userStore.fetchUser( id ) }, [ userStore, id ] )

    return (
        <>
            <Divider>User</Divider>
            <UserCard
                data = { userStore.user }
                loading = { userStore.isLoading }
            />
        </>
    )
})

export default User
