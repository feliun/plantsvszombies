const { pipe, createBasicPlant, canSuffer, amendAvatar, canHarm } = require('../common');
const PEASHOOTER_AVATAR =
	'https://vignette.wikia.nocookie.net/plantsvszombies/images/8/85/Peashooter1.png/revision/latest';

module.exports = pipe(
	createBasicPlant,
	amendAvatar(PEASHOOTER_AVATAR),
	canSuffer,
	canHarm,
);
