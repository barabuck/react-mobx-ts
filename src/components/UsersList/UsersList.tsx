import React, { FC } from 'react';
import { List } from 'antd';
import IUser from '../../models/IUser';
import Spinner from '../Spinner/Spinner';

import './user-list.scss';

interface Props {
    data: IUser[];
    loading: boolean;
    onClick: Function;
}

const UsersList: FC<Props> = (props: Props) => {
    const { data, loading, onClick } = props;
    const onUser = (id: number) => onClick(id);

    return loading ? (
        <Spinner />
    ) : (
        <List
            size="large"
            dataSource={data}
            renderItem={(item) => (
                <List.Item>
                    <List.Item.Meta
                        title={
                            <button
                                type="button"
                                className="user-list__link"
                                onClick={() => onUser(item.id)}
                            >
                                {item.name}
                            </button>
                        }
                        description={item.email}
                    />
                </List.Item>
            )}
        />
    );
};

export default UsersList;
