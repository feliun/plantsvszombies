const expect = require('expect.js');
const { create } = require('../../lib/zombies/factory')();
const createHarmSpy = require('../spies/harm');

const ZOMBIE_DAMAGE = 20;

describe('Basic zombie features', () => {
	let zombie;
	let harmSpy;

	beforeEach(() => {
		zombie = create('basic');
		harmSpy = createHarmSpy();
	});

	it('configures its basic parameters', () => {
		expect(zombie.id).to.be.a('string');
		expect(zombie.avatar).to.be.a('string');
		expect(zombie.toughness).to.equal(200);
		expect(zombie.damage).to.equal(20);
		expect(zombie.speed).to.equal(1);
	});

	it('can die', () => {
		expect(zombie.toughness).to.equal(200);
		expect(zombie.die().toughness).to.equal(0);
	});

	it('can suffer', () => {
		expect(zombie.toughness).to.equal(200);
		expect(zombie.suffer(20).toughness).to.equal(180);
	});

	it('can harm', () => {
		expect(harmSpy.woundsLength()).to.eql(0);
		expect(zombie.harm(harmSpy));
		expect(harmSpy.getWound(0)).to.eql(ZOMBIE_DAMAGE);
	});
});
