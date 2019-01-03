const { basic, pipe, createBasicFeatures, amendAvatar } = require('../common');
const FLAG_AVATAR = 'https://vignette.wikia.nocookie.net/plantsvszombies/images/0/0d/Flag_Zombie1.png/revision/latest';

module.exports = pipe(
	basic,
	amendAvatar(FLAG_AVATAR),
	createBasicFeatures,
);
