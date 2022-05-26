import { AxiosResponse } from 'axios'
import api from '../http'
import IUser from '../models/IUser'

export default class UserService {
    static async fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return api.get<IUser[]>('/users')
    }
    
    static async fetchUser(id: string | undefined ): Promise<AxiosResponse<IUser>> {
        return api.get<IUser>(`/users/${id}`)
    }    
}
