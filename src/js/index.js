'use strict';

var thermostat = new Thermostat();

function updateTemperature() {
  $(".temperature").text(thermostat.temperature());
};

updateTemperature();

$(".up").click(function () {
  thermostat.up();
  updateTemperature();
});

$(".down").click(function () {
  thermostat.down();
  updateTemperature();
});

$(".reset").click(function () {
  thermostat.reset();
  updateTemperature();
});

$(".power-saving-mode").click(function () {
  thermostat.togglePowerSavingMode();
  updateTemperature();
});



// var powerSavingModeColour = $("body");

// powerSavingModeColour.addClass("medium-energy-usage");
