"use strict";

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.maxTemperature = 25;
  this.temperature = 20;
  this.powerSave = true;
}
Thermostat.prototype.increaseTemperature = function () {
  if (this.temperature < this.maxTemperature) {
    this.temperature += 1;
  }
};

Thermostat.prototype.decreaseTemperature = function () {
  if (this.temperature > this.MINIMUM_TEMPERATURE ) {
    this.temperature -= 1;
  };
};

Thermostat.prototype.turnPowerSaveOff = function () {
  this.powerSave = false;
  this.maxTemperature = 32;
};

Thermostat.prototype.turnPowerSaveOn = function () {
  this.maxTemperature = 25;
  this.powerSave = true;
};

Thermostat.prototype.resetTemperature = function () {
  this.temperature = 20;
};

Thermostat.prototype.energyUsage = function () {
  if (this.temperature < 18) {
    return 'low usage';
  } else if (this.temperature > 25 ) {
    return 'high usage';
  } else {
    return 'medium usage';
  }
};
