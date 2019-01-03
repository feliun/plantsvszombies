const expect = require('expect.js');
const { create } = require('../../lib/plants/factory')();
const createHarmSpy = require('../spies/harm');

describe('Wallnut plant features', () => {
	let plant;
	let harmSpy = createHarmSpy();

	beforeEach(() => {
		plant = create('wallnut');
	});

	it('configures its basic parameters', () => {
		expect(plant.id).to.be.a('string');
		expect(plant.sun).to.equal(50);
		expect(plant.toughness).to.equal(4000);
		expect(plant.recharge).to.equal(20);
		expect(plant.damage).to.equal(0);
		expect(plant.range).to.equal(null);
		expect(plant.shootFrequency).to.equal(0);
		expect(plant.avatar).to.be.a('string');
	});

	it('can suffer', () => {
		expect(plant.toughness).to.equal(4000);
		expect(plant.suffer(20).toughness).to.equal(3980);
	});

	it('cannot harm', () => {
		expect(harmSpy.woundsLength()).to.equal(0);
		plant.harm(harmSpy);
		expect(harmSpy.woundsLength()).to.equal(0);
	});
});
