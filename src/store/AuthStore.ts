import { makeAutoObservable } from "mobx"

interface Auth {
    auth: boolean
}

export default class AuthStore implements Auth {
    auth = true

    constructor() {
        makeAutoObservable(this)
    }
} 
