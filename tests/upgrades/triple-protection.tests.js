const expect = require('expect.js');
const { pipe } = require('../../lib/common');
const { createBasicPlant } = require('../../lib/plants/common');
const { createBasicZombie } = require('../../lib/zombies/common');
const tripleProtection = require('../../lib/upgrades/types/triple-protection');

describe('Triple protection for plants & zombies', () => {
  let plant;

	beforeEach(() => {
		plant = pipe(
      createBasicPlant,
      tripleProtection
    )();
    zombie = pipe(
      createBasicZombie,
      tripleProtection,
    )();
	});

	it('triples the toughness on a basic plant', () => {
		expect(plant.toughness).to.equal(900);
	});

  it('triples the toughness on a basic zombie', () => {
		expect(plant.toughness).to.equal(900);
	});
});
