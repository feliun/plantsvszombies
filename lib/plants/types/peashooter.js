const { basic, pipe, canBeHarmed, amendAvatar, canShoot } = require('../common');
const PEASHOOTER_AVATAR =
	'https://vignette.wikia.nocookie.net/plantsvszombies/images/8/85/Peashooter1.png/revision/latest';

module.exports = pipe(
	basic,
	amendAvatar(PEASHOOTER_AVATAR),
	canBeHarmed,
	canShoot,
);
