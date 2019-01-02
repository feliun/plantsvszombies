module.exports = () => {
	const biteCalls = [];
	const api = {
		bite: (...args) => biteCalls.push(args),
		biteCalls,
	};
	return api;
};
