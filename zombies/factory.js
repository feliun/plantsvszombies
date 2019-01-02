const { join } = require('path');
const zombies = require('require-all')({
	dirname: join(__dirname, 'types'),
});

module.exports = () => ({
	create: (type, options = {}) => {
		const constructor = zombies[type];
		if (!constructor) throw new Error(`There is no zombie of type ${type}`);
		return constructor(options);
	},
});
