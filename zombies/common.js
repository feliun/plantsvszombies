const pipe = (...fns) => args => fns.reduce((total, fn) => fn(total), args);

const addItem = item => obj => ({
	...obj,
	features: {
		...obj.features,
		items: obj.features.items.concat(item),
	},
});

const amendField = field => value => obj => ({
	...obj,
	[field]: value,
});

const amendHealth = amendField('health');

const amendFeature = feature => value => obj => ({
	...obj,
	features: {
		...obj.features,
		[feature]: value,
	},
});

const amendHead = amendFeature('head');

const canDie = obj => ({
	...obj,
	die: () => ({
		...obj,
		health: 0,
	}),
});

const canBeHarmed = obj => ({
	...obj,
	harm: amount => ({
		...obj,
		health: obj.health - amount,
	}),
});

const canEat = obj => ({
	...obj,
	eat: plant => plant.bite(),
});

const trace = obj => console.log(JSON.stringify(obj)) || obj;

const basic = () => {
	const zombieData = {
		features: {
			head: 'bold',
			clothes: 'suit',
			complexion: 'regular',
			items: [],
		},
		health: 200,
		speed: 1,
	};
	return zombieData;
};

const createBasicFeatures = pipe(
	canDie,
	canBeHarmed,
	canEat,
);

module.exports = {
	basic,
	createBasicFeatures,
	pipe,
	amendHealth,
	amendHead,
	addItem,
};
