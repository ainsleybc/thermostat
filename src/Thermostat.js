'use strict';

function Thermostat() {
  this._DEFAULT_TEMPERATURE = 20;
  this._temperature = this._DEFAULT_TEMPERATURE;
  this._powerSavingModeLimit = 25;
}

Thermostat.prototype = {
  
  powerSavingMode: function (mode) {
    if (mode == 'on') {
      this._powerSavingModeLimit = 25;
    } else if (mode == 'off') {
      this._powerSavingModeLimit = 32;
    }
  },

  temperature: function () {
    return this._temperature;
  },

  up: function() {
    if (this._temperature >= this._powerSavingModeLimit) throw new Error('Maximum temperature is '+this._powerSavingModeLimit+' degrees');
    this._temperature++;
  },

  down: function () {
    if (this._temperature === 10) throw new Error('Minimum temperature is 10');
    this._temperature--;
  },

  reset: function () {
    this._temperature = this._DEFAULT_TEMPERATURE;
  },

  energyUsage: function () {
    if (this._temperature < 18) {
      return 'low-usage';
    } else if (this._temperature < 25) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    }
  }

};
