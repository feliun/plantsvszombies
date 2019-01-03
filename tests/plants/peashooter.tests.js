const expect = require('expect.js');
const { create } = require('../../lib/plants/factory')();
const createHarmSpy = require('../spies/harm');

describe('Peashooter plant features', () => {
	let plant;
	let harmSpy = createHarmSpy();

	beforeEach(() => {
		plant = create('peashooter');
	});

	it('configures its basic parameters', () => {
		expect(plant.id).to.be.a('string');
		expect(plant.sun).to.equal(100);
		expect(plant.toughness).to.equal(300);
		expect(plant.recharge).to.equal(5);
		expect(plant.damage).to.equal(20);
		expect(plant.range).to.equal('straight');
		expect(plant.shootFrequency).to.equal(1.5);
		expect(plant.avatar).to.equal(
			'https://vignette.wikia.nocookie.net/plantsvszombies/images/8/85/Peashooter1.png/revision/latest',
		);
	});

	it('can suffer', () => {
		expect(plant.toughness).to.equal(300);
		expect(plant.suffer(20).toughness).to.equal(280);
	});

	it('can harm', () => {
		expect(harmSpy.woundsLength()).to.equal(0);
		plant.harm(harmSpy);
		expect(harmSpy.woundsLength()).to.equal(1);
		const shot = harmSpy.getWound(0);
		expect(shot).to.equal(plant.damage);
	});
});
