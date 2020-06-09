'use strict'

class Thermostat {
    constructor() {
        this._temp = 20
    }

    currentTemp() {
        return this._temp
    } 

    up() {
        this._temp ++
    }

    down() {
        if (this.tempCheck()) {
        this._temp --
        }
    }

    tempCheck() {
        return this._temp > 10
    }

}
