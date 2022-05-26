import React, { FC, useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { observer } from 'mobx-react'
import { privateRoutes, publicRoutes, RoutesNames } from './router'
import AuthStore from './store/AuthStore'

import './App.scss'


const App: FC = observer(() => {
  const [ authStore ] = useState( () => new AuthStore() )

  return (
    authStore.auth
    ?
    <Routes>
        { privateRoutes.map( route => 
            <Route
                key     = { route.path }
                path    = { route.path }
                element = { <route.element /> }
            />    
        )}
            <Route path="*" element = { <Navigate to = { RoutesNames.USERS } /> } />
    </Routes>
    :
    <Routes>
        { publicRoutes.map( route =>
            <Route 
                key     = { route.path }
                path    = { route.path }
                element = { <route.element /> }  
            />
        ) }
        <Route path="*" element = { <Navigate to = { RoutesNames.LOGIN } /> } />
    </Routes>
  )
})

export default App
