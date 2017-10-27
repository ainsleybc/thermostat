'use strict';

var thermostat = new Thermostat();

function updateTemperature() {
  var temp = thermostat.temperature();
  var tempUp = function () {
    if (thermostat.isMaxTemperature()) return temp;
    return temp+1;
  }();
  var tempDown = function () {
    if (thermostat.isMinTemperature()) return temp;
    return temp-1;
  }();
  $("#temperature-box").html('<p>'+(tempUp)+'</p><p>'+(temp)+'</p><p>'+(tempDown)+'</p>');
  updateEnergyUsage();
};

updateTemperature();

$(".up").click(function () {
  $('#temperature-box').addClass('scroll-up');
  thermostat.up();
  finishScroll();
});

$(".down").click(function () {
  $('#temperature-box').addClass('scroll-down');
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

$("#citySelect").on("change", function() {
  getWeather($("#citySelect option:selected").val());
})

function updateEnergyUsage() {
  $("body").removeClass().addClass(thermostat.energyUsage()).fadeIn('slow');
};

function toggleRotation() {
    $('#temperature').toggleClass('rotate-down').toggleClass('rotate-up');
};

function finishScroll() {
  setTimeout(function () {
    $('#temperature-box').removeClass('scroll-up');
    $('#temperature-box').removeClass('scroll-down');    
    updateTemperature();
  }, 500);
}

function getWeather(city) {
  $.get("http://api.openweathermap.org/data/2.5/weather?q="+city+",UK&APPID=be452588d94a0810dfb29525e3393acd", function (weatherData) {
    $('#degrees').text(Math.round(weatherData.main.temp) - 273);
    $('#description').text(weatherData.weather[0].description);
    $('#weather-forecast').removeClass('hide-text');
  })
}
