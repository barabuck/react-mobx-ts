import React, { FC, useEffect } from 'react';
import { observer } from 'mobx-react';
import { Divider } from 'antd';
import { useParams } from 'react-router-dom';
import UserCard from '../../components/UserCard/UserCard';
import userStore from '../../store/UserStore';

const User: FC = observer(() => {
    const { user, isLoading } = userStore;
    const { id } = useParams();

    useEffect(() => {
        userStore.fetchUser(id);
    }, [id]);

    return (
        <>
            <Divider>User</Divider>
            <UserCard data={user} loading={isLoading} />
        </>
    );
});

export default User;
