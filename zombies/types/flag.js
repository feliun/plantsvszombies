const { basic, pipe, createBasicFeatures, addItem } = require('../common');

module.exports = pipe(
	basic,
	addItem('flag'),
	createBasicFeatures,
);
