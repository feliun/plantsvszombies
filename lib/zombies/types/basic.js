const { basic, pipe, createBasicFeatures, amendAvatar } = require('../common');
const BASIC_AVATAR = 'https://vignette.wikia.nocookie.net/plantsvszombies/images/5/54/Zombie1.png/revision/latest';

module.exports = pipe(
	basic,
	amendAvatar(BASIC_AVATAR),
	createBasicFeatures,
);
