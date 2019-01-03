const createUUID = require('uuid/v1');
const pipe = (...fns) => args => fns.reduce((total, fn) => fn(total), args);

const amendField = field => value => obj => ({
	...obj,
	[field]: value,
});

const amendToughness = amendField('toughness');
const amendAvatar = amendField('avatar');

const canDie = obj => ({
	...obj,
	die: () => ({
		...obj,
		toughness: 0,
	}),
});

const canBeHarmed = obj => ({
	...obj,
	harm: amount => ({
		...obj,
		toughness: obj.toughness - amount,
	}),
});

const canEat = obj => ({
	...obj,
	eat: plant => plant.bite(),
});

const trace = obj => console.log(JSON.stringify(obj)) || obj;

const basic = () => ({
	id: createUUID(),
	avatar: null,
	toughness: 200,
	speed: 1,
});

const createBasicFeatures = pipe(
	canDie,
	canBeHarmed,
	canEat,
);

module.exports = {
	basic,
	createBasicFeatures,
	pipe,
	amendToughness,
	amendAvatar,
};
