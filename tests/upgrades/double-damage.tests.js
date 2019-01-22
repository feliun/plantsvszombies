const expect = require('expect.js');
const { pipe } = require('../../lib/common');
const { createBasicPlant } = require('../../lib/plants/common');
const { createBasicZombie } = require('../../lib/zombies/common');
const doubleDamage = require('../../lib/upgrades/types/double-damage');

describe('Double damage for plants & zombies', () => {
  let plant;

	beforeEach(() => {
		plant = pipe(
      createBasicPlant,
      doubleDamage
    )();
    zombie = pipe(
      createBasicZombie,
      doubleDamage,
    )();
	});

	it('doubles the damage on a basic plant', () => {
		expect(plant.damage).to.equal(40);
	});

  it('doubles the damage on a basic zombie', () => {
		expect(plant.damage).to.equal(40);
	});
});
