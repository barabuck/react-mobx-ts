import React, { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { observer } from "mobx-react"
import UsersList from '../../components/UsersList/UsersList'
import { Divider } from 'antd'
import userStore from '../../store/UserStore'

const Users: FC = observer(() => {
  const navigate = useNavigate()
  const { users, isLoading, fetchUsers } = userStore

  useEffect( () => {
    fetchUsers()
  }, [ fetchUsers ])

  const viewUser = ( id: number ) => {
    navigate( `/user/${id}` )
  }

  return (
    <>
      <Divider>Users</Divider>
      <UsersList
        data = { users }
        loading = { isLoading }
        onClick = { viewUser }
      />
    </>
  )
})

export default Users
