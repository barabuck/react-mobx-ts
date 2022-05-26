import React, { FC } from 'react'
import IUser from '../../models/IUser'
import Spinner from '../Spinner/Spinner'

import './user-card.scss'

interface Props {
  data: IUser | null
  loading: boolean
}

const UserCard: FC<Props> = (props: Props) => {

  return (
    props.loading
      ?
      <Spinner />
      :
      <div className='user-card'>
        <div className='user-card__name'>Name: { props.data?.name }</div>
        <div className='user-card__name'>Email: { props.data?.email }</div>
        <div className='user-card__name'>Phone: { props.data?.phone }</div>
        <div className='user-card__name'>Number: { props.data?.website }</div>
      </div>
  )
}

export default UserCard
