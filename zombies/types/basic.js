const { basic, pipe, createBasicFeatures } = require('../common');

module.exports = pipe(
	basic,
	createBasicFeatures,
);
