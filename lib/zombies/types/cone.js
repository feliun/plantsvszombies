const { createBasicZombie, pipe, amendToughness, amendAvatar, canDie, canSuffer, canHarm } = require('../common');
const CONE_AVATAR =
	'https://vignette.wikia.nocookie.net/plantsvszombies/images/c/c2/Conehead_Zombie1.png/revision/latest';

module.exports = pipe(
	createBasicZombie,
	amendToughness(560),
	amendAvatar(CONE_AVATAR),
	canDie,
	canSuffer,
	canHarm,
);
