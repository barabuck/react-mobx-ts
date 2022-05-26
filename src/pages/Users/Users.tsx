import React, { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { observer } from "mobx-react"
import UsersList from '../../components/UsersList/UsersList'
import { Divider } from 'antd'
import UserStore from '../../store/UserStore'

const Users: FC = observer(() => {
  const navigate = useNavigate()
  const [ userStore ] = useState( () => new UserStore() )

  useEffect( () => {
    userStore.fetchUsers()
  }, [ userStore ])

  const viewUser = ( id: number ) => {
    navigate( `/user/${id}` )
  }

  return (
    <>
      <Divider>Users</Divider>
      <UsersList
        data = { userStore.users }
        loading = { userStore.isLoading }
        onClick = { viewUser }
      />
    </>
  )
})

export default Users
