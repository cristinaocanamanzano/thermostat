"use strict";

describe('Thermostat',function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it ('starts with a temperature of 20', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  describe('increaseTemperature',function(){
    it('increases temperature by 1', function(){
      thermostat.increaseTemperature();
      expect(thermostat.temperature).toEqual(21);
    })
    
    it('increases temperature by 5', function(){
      for (var i = 0; i < 5; i++) {
        thermostat.increaseTemperature();
      }
      expect(thermostat.temperature).toEqual(25);
    })
  })

  describe('decreaseTemperature',function(){
    it('decreases temperature by 1', function(){
      thermostat.decreaseTemperature();
      expect(thermostat.temperature).toEqual(19);
    })

    it('decreases temperature by 5', function(){
      for (var i = 0; i < 5; i++) {
        thermostat.decreaseTemperature();
      }
      expect(thermostat.temperature).toEqual(15);
    })
  })
})
