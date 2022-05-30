import React, { FC, useEffect } from 'react'
import { observer } from 'mobx-react'
import UserCard from '../../components/UserCard/UserCard'
import { Divider } from 'antd'
import { useParams } from 'react-router-dom'
import userStore from '../../store/UserStore'


const User: FC = observer(() => {
    const { user, isLoading, fetchUser } = userStore
    const { id } = useParams()

    useEffect( () => { fetchUser( id ) }, [ fetchUser, id ] )

    return (
        <>
            <Divider>User</Divider>
            <UserCard
                data = { user }
                loading = { isLoading }
            />
        </>
    )
})

export default User
