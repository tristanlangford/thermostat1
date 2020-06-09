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

    it('increases the currentTemp by 1 when .up() called', function() {
        thermostat.up()
        expect(thermostat.currentTemp()).toEqual(21)
    })

    it('descreases the currentTemp by 1 when .down() called', function() {
        thermostat.down()
        expect(thermostat.currentTemp()).toEqual(19)
    })

    it('will not go lower than 10 degrees', function() {
        for (let i = 0; i <= 15; i ++) {
            thermostat.down()
        }
        expect(thermostat.currentTemp()).toEqual(10)
    })


})