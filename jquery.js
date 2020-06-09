thermostat = new Thermostat()

window.onload = function() {
 $('.currentTemp').text(thermostat.currentTemp() + ' c')
 $('.usageLevel').css('background-color', 'black')
 $('.powerSaver').css('background-color', 'green')
}

$('.up').click(function() {
    thermostat.up();
    usageCheck()
    $('.currentTemp').text(thermostat.currentTemp() + " c");
})

$('.down').click(function() {
    thermostat.down();
    usageCheck()
    $('.currentTemp').text(thermostat.currentTemp() + " c");
})

$('.resetTemperature').click(function() {
    thermostat.reset();
    usageCheck()
    $('.currentTemp').text(thermostat.currentTemp() + " c");
})

$('.powerSaver').click(function() {
    thermostat.changeMode();
    if (thermostat.powerModeCheck() === true) {
        ($(this).css('background-color', 'green'))
    } else {
        ($(this).css('background-color', 'red'))
    }
})

function usageCheck() {
    if (thermostat.usageLevel() === 'low-usage') {
        $('.usageLevel').css('background-color', 'green')
    } else if (thermostat.usageLevel() === 'medium-usage') {
        $('.usageLevel').css('background-color', 'black')
    } else {    
        $('.usageLevel').css('background-color', 'red')
    }
}
