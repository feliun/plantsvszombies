const { join } = require('path');
const plants = require('require-all')({
	dirname: join(__dirname, 'types'),
});

module.exports = () => ({
	create: (type, options = {}) => {
		const constructor = plants[type];
		if (!constructor) throw new Error(`There is no plant of type ${type}`);
		return constructor(options);
	},
});
