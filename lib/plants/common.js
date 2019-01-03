const common = require('../common');

const createBasicPlant = () => ({
	id: common.generateId(),
	sun: 100,
	toughness: 300,
	recharge: 5,
	damage: 20,
	shootFrequency: 1.5,
	range: 'straight',
	avatar: null,
});

module.exports = {
	...common,
	createBasicPlant,
};
