import { makeAutoObservable } from "mobx"

export default class UserStore {
    constructor() {
        this._isAuth = (localStorage.getItem("token") == undefined || localStorage.getItem("token") == null || localStorage.getItem("token") == "") ? false : true
        this._user = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUser(user) {
        this._user = user
    }

    get Auth() {
        return this._isAuth
    }

    get User() {
        return this._user
    }


}