const pipe = (...fns) => args => fns.reduce((total, fn) => fn(total), args);

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

const basic = () => {
	const zombieData = {
		features: {
			head: 'bold',
			clothes: 'suit',
			complexion: 'regular',
			object: 'none',
		},
		health: 200,
		speed: 1,
	};
	return zombieData;
};

const createBasicZombie = pipe(
	basic,
	canDie,
	canBeHarmed,
	canEat,
);

module.exports = {
	basic: createBasicZombie,
};
