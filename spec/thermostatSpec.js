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

    it ('Creates the thermostat with powerSaving mode off (true)', function () {
        expect(thermostat.powerModeCheck()).toEqual(true)
    });

    it ('Can have powerSaving mode turned to off using changeMode', function() {
        thermostat.changeMode()
        expect(thermostat.powerModeCheck()).toBeFalsy();
    })

    it ('Will not go above 25 when powerSaver mode is true', function() {
        for (let i = 0; i < 10; i++) {
            thermostat.up()
        }
        expect(thermostat.currentTemp()).toEqual(25);
    })

    it ('Will not go above 32 when powerSaver mode is false', function() {
        thermostat.changeMode()
        for (let i = 0; i < 15; i++) {
            thermostat.up();
        };
        expect(thermostat.currentTemp()).toEqual(32);
    })

    it ('resets the temp to 20 when .reset() called', function() {
        for (let i = 0; i < 15; i++) {
            thermostat.up();
        };
        thermostat.reset();
        expect(thermostat.currentTemp()).toEqual(20);
    })

    it ('returns low-usage when temp < 18', function() {
        for (let i = 0; i < 15; i++) {
            thermostat.down();
        };
        expect(thermostat.usageLevel()).toEqual('low-usage')
    });

    it ('returns medium-usage when temp < 25 but higher than 18', function() {
        expect(thermostat.usageLevel()).toEqual('medium-usage')
    })

    it ('returns high-usage when temp > 25', function() {
        thermostat.changeMode();
        for (let i = 0; i < 8 ; i++) {
            thermostat.up();
        }
        expect(thermostat.usageLevel()).toEqual('high-usage');
    })

})