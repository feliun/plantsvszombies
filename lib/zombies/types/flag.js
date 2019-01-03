const { createBasicZombie, pipe, amendAvatar, canHarm, canDie, canSuffer } = require('../common');
const FLAG_AVATAR = 'https://vignette.wikia.nocookie.net/plantsvszombies/images/0/0d/Flag_Zombie1.png/revision/latest';

module.exports = pipe(
	createBasicZombie,
	amendAvatar(FLAG_AVATAR),
	canHarm,
	canDie,
	canSuffer,
);
