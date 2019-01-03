const { basic, pipe, createBasicFeatures, amendToughness, amendAvatar } = require('../common');
const CONE_AVATAR =
	'https://vignette.wikia.nocookie.net/plantsvszombies/images/c/c2/Conehead_Zombie1.png/revision/latest';

module.exports = pipe(
	basic,
	amendToughness(560),
	amendAvatar(CONE_AVATAR),
	createBasicFeatures,
);
