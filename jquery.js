thermostat = new Thermostat()

window.onload = function() {
 $('.currentTemp').text(thermostat.currentTemp())
}

$('.up').click(function() {
    thermostat.up();
    $('.currentTemp').text(thermostat.currentTemp());
})

$('.down').click(function() {
    thermostat.down();
    $('.currentTemp').text(thermostat.currentTemp());
})

$('.resetTemperature').click(function() {
    thermostat.reset();
    $('.currentTemp').text(thermostat.currentTemp());
})

$('.powerSaver').click(function() {
    thermostat.changeMode();
    if (thermostat.powerModeCheck() === true) {
        ($(this).css('background-color', 'green'))
    } else {
        ($(this).css('background-color', 'red'))
    }
})
