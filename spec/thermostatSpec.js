'use strict';

describe('Thermostat', function() {
    let thermostat

    beforeEach (function() {
        thermostat = new Thermostat
    })

    it('sets the tempreture 20', function() {
        expect(thermostat.currentTemp()).toEqual(20)
    }
    )


})