'use strict';

var thermostat = new Thermostat();

function updateTemperature() {
  var temp = thermostat.temperature();
  $("#temperature-box").html('<p>'+(temp+1)+'</p><p>'+(temp)+'</p><p>'+(temp-1)+'</p>');
  updateEnergyUsage();
};

updateTemperature();

$(".up").click(function () {
  // toggleRotation();
  $('#temperature-box').addClass('scroll-up');
  thermostat.up();
  finishScroll();
});

$(".down").click(function () {
  // toggleRotation();
  thermostat.down();
  finishScroll();
});

$(".reset").click(function () {
  thermostat.reset();
  updateTemperature();
});

$(".power-saving-mode").click(function () {
  thermostat.togglePowerSavingMode();
  updateTemperature();
  $("#power-saving-mode").toggleClass('psm-on'); 
});

function updateEnergyUsage() {
  $("body").removeClass().addClass(thermostat.energyUsage()).fadeIn('slow');
};

function toggleRotation() {
    $('#temperature').toggleClass('rotate-down').toggleClass('rotate-up');
};

function finishScroll() {
  setTimeout(function () {
    $('#temperature-box').removeClass('scroll-up');
    updateTemperature();
    // toggleRotation();
  }, 1000);
}

function getWeather(city) {
  $.get('$.get("api.openweathermap.org/data/2.5/weather?"id='+city)
}
