import { getSuggestedQuery } from "@testing-library/react"
import { makeAutoObservable } from "mobx"

export default class HeightStore {
    constructor() {
        this._height = 0
        makeAutoObservable(this)
    }

    setHeight(height) {
        this._height = height
    }

    get height() {
        return this._height
    }


}