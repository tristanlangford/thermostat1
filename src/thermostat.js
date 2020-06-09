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
        if (this.maxTempCheck()) {
            this._temp ++ 
        };
    }

    down() {
        if (this.minTempCheck()) {
        this._temp --
        }
    }

    powerModeCheck() {
        return this._powerSaver;
    }

    minTempCheck() {
        return this._temp > 10
    }

    maxTempCheck() {
        return this._temp < 25; 
    };

    changeMode() {
        this._powerSaver = !this._powerSaver
    }

}
