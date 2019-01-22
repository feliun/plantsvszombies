const FACTOR = 3;

module.exports = obj => ({
  ...obj,
  toughness: obj.toughness * FACTOR,
});