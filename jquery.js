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