const createUUID = require('uuid/v1');
const pipe = (...fns) => args => fns.reduce((total, fn) => fn(total), args);

const amendField = field => value => obj => ({
	...obj,
	[field]: value,
});

const amendAvatar = amendField('avatar');

const canBeHarmed = obj => ({
	...obj,
	harm: amount => ({
		...obj,
		toughness: obj.toughness - amount,
	}),
});

const canShoot = obj => ({
	...obj,
	shoot: target => target.harm(obj.damage),
});

const basic = () => {
	const plantData = {
		id: createUUID(),
		sun: 100,
		toughness: 300,
		recharge: 5,
		damage: 20,
		shootFrequency: 1.5,
		range: 'straight',
		avatar: null,
		target: null,
	};
	return plantData;
};

module.exports = {
	basic,
	pipe,
	canBeHarmed,
	canShoot,
	amendAvatar,
};
