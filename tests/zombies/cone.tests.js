const expect = require('expect.js');
const { create } = require('../../zombies/factory')();
const createPlantSpy = require('../spies/plant');

describe('Conehead zombie features', () => {
	let zombie;
	let plantSpy;

	beforeEach(() => {
		zombie = create('cone');
		plantSpy = createPlantSpy();
	});

	it('configures its basic parameters', () => {
		expect(zombie.health).to.equal(560);
		expect(zombie.speed).to.equal(1);
		expect(zombie.features).to.eql({
			head: 'cone',
			clothes: 'suit',
			complexion: 'regular',
			items: [],
		});
	});

	it('can die', () => {
		expect(zombie.health).to.equal(560);
		expect(zombie.die().health).to.equal(0);
	});

	it('can be harmed', () => {
		expect(zombie.health).to.equal(560);
		expect(zombie.harm(20).health).to.equal(540);
	});

	it('can eat a plant', () => {
		expect(plantSpy.biteCalls).to.eql([]);
		expect(zombie.eat(plantSpy));
		expect(plantSpy.biteCalls).to.eql([[]]);
	});
});
