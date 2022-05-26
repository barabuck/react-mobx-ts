import React from "react"
import Login from "../pages/Login/Login"
import User from "../pages/User/User"
import Users from "../pages/Users/Users"

export interface IRoute {
    path: string
    element: React.ComponentType
}

export enum RoutesNames {
    USERS = '/users',
    USER = '/user/:id',
    LOGIN = '/login'
}

export const publicRoutes: IRoute[] = [
    { path: RoutesNames.LOGIN, element: Login },
]

export const privateRoutes: IRoute[] = [
    { path: RoutesNames.USERS, element: Users },
    { path: RoutesNames.USER, element: User }
]
