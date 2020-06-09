'use strict'

class Thermostat {
    constructor() {
        this._temp = 20;
        this._powerSaver = true;
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
        if (this.powerModeCheck()) {
            return this._temp < 25; 
        } else {
            return this._temp < 32;
        }
    };

    changeMode() {
        this._powerSaver = !this._powerSaver
    }

    reset() {
        this._temp = 20
    }

    usageLevel() {
        if (this._temp < 18) {
            return 'low-usage'
        } else if (this._temp < 25) {
            return 'medium-usage'
        } else {    
            return 'high-usage'
        }
    }

}
