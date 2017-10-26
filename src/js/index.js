'use strict';

var thermostat = new Thermostat();

function updateTemperature() {
  $(".temperature").text(thermostat.temperature());
  updateEnergyUsage();
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

function updateEnergyUsage() {
  var classToRemove
  $("body").removeClass().addClass(thermostat.energyUsage()).fadeIn('slow');
};
