import { makeAutoObservable } from "mobx"

interface Auth {
    auth: boolean
}
class AuthStore implements Auth {
    auth = true

    constructor() {
        makeAutoObservable(this)
    }
}

const authStore = new AuthStore()

export default authStore
