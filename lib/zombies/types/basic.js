const { createBasicZombie, pipe, amendAvatar, canDie, canSuffer, canHarm } = require('../common');
const BASIC_AVATAR = 'https://vignette.wikia.nocookie.net/plantsvszombies/images/5/54/Zombie1.png/revision/latest';

module.exports = pipe(
	createBasicZombie,
	amendAvatar(BASIC_AVATAR),
	canDie,
	canSuffer,
	canHarm,
);
