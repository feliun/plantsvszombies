const expect = require('expect.js');
const { create } = require('../../zombies/factory')();
const createPlantSpy = require('../spies/plant');

describe('Basic zombie features', () => {
	let zombie;
	let plantSpy;

	beforeEach(() => {
		zombie = create('basic');
		plantSpy = createPlantSpy();
	});

	it('configures its basic parameters', () => {
		expect(zombie.health).to.equal(200);
		expect(zombie.speed).to.equal(1);
		expect(zombie.features).to.eql({
			head: 'bold',
			clothes: 'suit',
			complexion: 'regular',
			items: [],
		});
	});

	it('can die', () => {
		expect(zombie.health).to.equal(200);
		expect(zombie.die().health).to.equal(0);
	});

	it('can be harmed', () => {
		expect(zombie.health).to.equal(200);
		expect(zombie.harm(20).health).to.equal(180);
	});

	it('can eat a plant', () => {
		expect(plantSpy.biteCalls).to.eql([]);
		expect(zombie.eat(plantSpy));
		expect(plantSpy.biteCalls).to.eql([[]]);
	});
});
