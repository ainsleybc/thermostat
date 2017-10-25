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
    it('throws an error when going below 10 degress', function () {
      for (var i = 0; i < 10; i++) {
        thermostat.down();
      }
      expect(function () { thermostat.down() }).toThrowError('Minimum temperature is 10')
    })
  })

  describe('power saving mode', function() {

    it('prevents temperature going above 25 degrees when on', function() {
      thermostat.powerSavingMode('on');
      for (var i = 0; i < 5; i++) {
        thermostat.up();
      }
      expect(function() { thermostat.up() }).toThrowError('Maximum temperature is 25 degrees')
    })
    it('prevents temperature going above 32 degrees when off', function() {
      thermostat.powerSavingMode('off');
      for (var i = 0; i < 12; i++) {
        thermostat.up();
      }
      expect(function() { thermostat.up() }).toThrowError('Maximum temperature is 32 degrees')
    })
    it('power saving mode is on by default', function() {
      for (var i = 0; i < 5; i++) {
        thermostat.up();
      }
      expect(function () { thermostat.up() }).toThrowError('Maximum temperature is 25 degrees');
    })

  })

  describe('reset', function () {
    
    it('resets the temperature to 20 degrees', function () {
      thermostat.up();
      thermostat.reset();
      expect(thermostat.temperature()).toEqual(20);
    })
    
  })

});
