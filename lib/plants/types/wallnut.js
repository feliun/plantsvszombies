const {
	pipe,
	createBasicPlant,
	canSuffer,
	amendAvatar,
	amendCost,
	amendToughness,
	amendRecharge,
	amendDamage,
	amendRange,
	amendShootFreq,
} = require('../common');
const WALLNUT_AVATAR = 'https://vignette.wikia.nocookie.net/plantsvszombies/images/c/c0/Wall-nut1.png/revision/latest';

module.exports = pipe(
	createBasicPlant,
	amendAvatar(WALLNUT_AVATAR),
	amendCost(50),
	amendToughness(4000),
	amendRecharge(20),
	amendDamage(0),
	amendRange(null),
	amendShootFreq(0),
	canSuffer,
);
