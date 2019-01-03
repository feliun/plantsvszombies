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

const canSuffer = obj => ({
	...obj,
	suffer: amount => ({
		...obj,
		toughness: obj.toughness - amount,
	}),
});

const canHarm = obj => ({
	...obj,
	harm: target => target.suffer(obj.damage),
});

const generateId = createUUID;

const trace = obj => console.log(JSON.stringify(obj)) || obj;

module.exports = {
	pipe,
	trace,
	generateId,
	amendToughness,
	amendAvatar,
	canDie,
	canSuffer,
	canHarm,
};
