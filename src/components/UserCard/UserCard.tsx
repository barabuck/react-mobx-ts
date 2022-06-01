import React, { FC } from 'react';
import IUser from '../../models/IUser';
import Spinner from '../Spinner/Spinner';

import './user-card.scss';

interface Props {
    data: IUser | null;
    loading: boolean;
}

const UserCard: FC<Props> = (props: Props) => {
    const { data, loading } = props;

    return loading ? (
        <Spinner />
    ) : (
        <div className="user-card">
            <div className="user-card__name">Name: {data?.name}</div>
            <div className="user-card__name">Email: {data?.email}</div>
            <div className="user-card__name">Phone: {data?.phone}</div>
            <div className="user-card__name">Number: {data?.website}</div>
        </div>
    );
};

export default UserCard;
