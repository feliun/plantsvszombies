const expect = require('expect.js');
const { create } = require('../../plants/factory')();
const createZombieSpy = require('../spies/zombie');

describe('Peashooter plant features', () => {
	let plant;
	let zombieSpy = createZombieSpy();

	beforeEach(() => {
		plant = create('peashooter');
	});

	it('configures its basic parameters', () => {
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

	it('can be harmed', () => {
		expect(plant.toughness).to.equal(300);
		expect(plant.harm(20).toughness).to.equal(280);
	});

	it('can shoot', () => {
		expect(zombieSpy.shootsLength()).to.equal(0);
		plant.shoot(zombieSpy);
		expect(zombieSpy.shootsLength()).to.equal(1);
		const [shot] = zombieSpy.getShoot(0);
		expect(shot).to.equal(plant.damage);
	});
});
