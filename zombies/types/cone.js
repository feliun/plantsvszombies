const { basic, pipe, createBasicFeatures, amendHealth, amendHead } = require('../common');

module.exports = pipe(
	basic,
	amendHealth(560),
	amendHead('cone'),
	createBasicFeatures,
);
