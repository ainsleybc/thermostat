'use strict';

function Thermostat() {
  this._DEFAULT_TEMPERATURE = 20;
  this._MINIMUM_TEMPERATURE = 10;
  this._MEDIUM_USEAGE_THRESHOLD = 18;
  this._PSM_ON_LIMIT = 25;
  this._PSM_OFF_LIMIT = 32;
  this._temperature = this._DEFAULT_TEMPERATURE;
  this._powerSavingMode = true;
}

Thermostat.prototype = {

  temperature: function () {
    return this._temperature;
  },
  
  up: function () {
    if (this._isMaxTemperature() === true) return;
    this._temperature++;
  },

  down: function () {
    if (this._isMinimumTemperature()) return;
    this._temperature--;
  },

  reset: function () {
    this._temperature = this._DEFAULT_TEMPERATURE;
  },

  togglePowerSavingMode: function () {
    this._powerSavingMode = !this._powerSavingMode;
    this._reduceIfOverLimit();
  },

  isPowerSavingModeOn: function () {
    return this._powerSavingMode;
  },

  _isMinimumTemperature: function () {
    return this._temperature === this._MINIMUM_TEMPERATURE;
  },

  _isMaxTemperature: function () {
    if (this.isPowerSavingModeOn()) {
      return this._temperature === this._PSM_ON_LIMIT;
    } else {
      return this._temperature === this._PSM_OFF_LIMIT;
    };
  },

  _reduceIfOverLimit: function () {
    if (this._temperature > this._PSM_ON_LIMIT && this._powerSavingMode) {
      this._temperature = this._PSM_ON_LIMIT;
    };
  },

  energyUsage: function () {
    if (this._temperature < this._MEDIUM_USEAGE_THRESHOLD ){
      return 'low-usage';
    } else if (this._temperature < this._PSM_ON_LIMIT) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    }
  }

};
