module.exports = () => {
	const shoots = [];
	const api = {
		harm: (...args) => {
			shoots.push(args);
		},
		shootsLength: () => shoots.length,
		getShoot: position => shoots[position],
	};
	return api;
};
