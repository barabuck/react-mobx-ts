import { makeAutoObservable } from 'mobx';
import IUser from '../models/IUser';
import UserService from '../services/UserService';

interface User {
    users: IUser[];
    isLoading: boolean;
    error: string;
    user: IUser;
    selectedUser: number;
    fetchUsers(): void;
    fetchUser(id: string): void;
}

class UserStore implements User {
    users = [] as IUser[];

    isLoading = true;

    error: string = '';

    user = {} as IUser;

    selectedUser = 0;

    constructor() {
        makeAutoObservable(this);
    }

    setIsLoading(bool: boolean) {
        this.isLoading = bool;
    }

    setUsers(users: IUser[]) {
        this.users = users;
    }

    setUser(user: IUser) {
        this.user = user;
    }

    setError(error: string) {
        this.error = error;
    }

    setSelectedUser(id: number) {
        this.selectedUser = id;
    }

    async fetchUsers() {
        this.setIsLoading(true);
        try {
            const response = await UserService.fetchUsers();
            this.setUsers(response.data);
            this.setIsLoading(false);
        } catch (e) {
            this.setIsLoading(false);
        }
    }

    async fetchUser(id: string | undefined) {
        this.setIsLoading(true);
        try {
            const response = await UserService.fetchUser(id);
            this.setUser(response.data);
            this.setIsLoading(false);
        } catch (e) {
            this.setIsLoading(false);
        }
    }
}

const userStore = new UserStore();

export default userStore;
