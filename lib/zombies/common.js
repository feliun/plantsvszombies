const common = require('../common');

const createBasicZombie = () => ({
	id: common.generateId(),
	avatar: null,
	toughness: 200,
	damage: 20,
	speed: 1,
});

module.exports = {
	...common,
	createBasicZombie,
};
