'use strict'

class Thermostat {
    constructor() {
        this._temp = 20;
        this._powerSaver = false;
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

    powerModeCheck() {
        return this._powerSaver;
    }

    tempCheck() {
        return this._temp > 10
    }

    changeMode() {
        this._powerSaver = !this._powerSaver
    }

}
