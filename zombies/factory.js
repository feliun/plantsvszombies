const zombies = require('./zombies');

module.exports = () => ({
	create: (type, options = {}) => {
		const constructor = zombies[type];
		if (!constructor) throw new Error(`There is no zombie of type ${type}`);
		return constructor(options);
	},
});
