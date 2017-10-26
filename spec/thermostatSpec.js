'use strict';

describe('Thermostat', function () {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  })

  describe('temperature', function () {

    it ('has default temperature of 20 degrees', function() {
      expect(thermostat.temperature()).toEqual(20);
    });

  })

  describe('up', function () {

    it('increases the temperature by 1 degree', function () {
      thermostat.up();
      expect(thermostat.temperature()).toEqual(21);
    })

  })

  describe('down', function () {

    it('decreases the temperature by 1 degree', function () {
      thermostat.down();
      expect(thermostat.temperature()).toEqual(19);
    })
    it('wont go below 10 degress', function () {
      for (var i = 0; i < 11; i++) {
        thermostat.down();
      }
      expect(thermostat.temperature()).toEqual(10);
    })
  })

  describe('power saving mode', function() {

    it('prevents temperature going above 25 degrees when on', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.temperature()).toEqual(25);
    })
    it('prevents temperature going above 32 degrees when off', function() {
      thermostat.togglePowerSavingMode();
      for (var i = 0; i < 12; i++) {
        thermostat.up();
      };
      expect(thermostat.temperature()).toEqual(32);      
    })
    it('power saving mode is on by default', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.temperature()).toEqual(25);
    })
    it('updates the temperature if it violates the limit', function () {
      thermostat.togglePowerSavingMode();
      for (var i = 0; i < 12; i++) {
        thermostat.up();
      };
      thermostat.togglePowerSavingMode();
      expect(thermostat.temperature()).toEqual(25);
    });

  })

  describe('reset', function () {
    
    it('resets the temperature to 20 degrees', function () {
      thermostat.up();
      thermostat.reset();
      expect(thermostat.temperature()).toEqual(20);
    })

  })

  describe('eneryUsage', function () {
    
    it('returns low-usage when temp < 18', function () {
      for (var i = 0; i < 3; i++) {
        thermostat.down();
      }
      expect(thermostat.energyUsage()).toEqual('low-usage');
    })
    it('returns medium-usage when temp < 25', function () {
      thermostat.togglePowerSavingMode();
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    })
    it('returns high-usage when temp > 25', function () {
      thermostat.togglePowerSavingMode();
      for (var i = 0; i <= 5; i++) {
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual('high-usage');
    })

  })

});
