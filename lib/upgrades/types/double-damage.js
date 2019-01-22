const FACTOR = 2;

module.exports = obj => ({
  ...obj,
  damage: obj.damage * FACTOR,
});