module.exports = () => {
	const wounds = [];
	const api = {
		suffer: (...args) => {
			wounds.push(...args);
		},
		woundsLength: () => wounds.length,
		getWound: position => wounds[position],
	};
	return api;
};
