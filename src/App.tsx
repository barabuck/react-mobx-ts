import React, { FC } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import { privateRoutes, publicRoutes, RoutesNames } from './router';

import './App.scss';
import authStore from './store/AuthStore';

const App: FC = observer(() => {
    const { auth } = authStore;

    return auth ? (
        <Routes>
            {privateRoutes.map((route) => (
                <Route key={route.path} path={route.path} element={<route.element />} />
            ))}
            <Route path="*" element={<Navigate to={RoutesNames.USERS} />} />
        </Routes>
    ) : (
        <Routes>
            {publicRoutes.map((route) => (
                <Route key={route.path} path={route.path} element={<route.element />} />
            ))}
            <Route path="*" element={<Navigate to={RoutesNames.LOGIN} />} />
        </Routes>
    );
});

export default App;
