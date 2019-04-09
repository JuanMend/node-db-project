let gamesCreated = [];

const saved = (req, res) => {
	res.status(200).json(gamesCreated);
};

const savedProfile = (req, res) => {
	gamesCreated.push(req.body);
	res.status(200).json(gamesCreated);
};

const deleteProfile = (req, res) => {
	let index = gamesCreated.findIndex((val) => val.name === req.params.name);
	gamesCreated.splice(index, 1);
	res.status(200).json(gamesCreated);
};

module.exports = {
	saved,
	savedProfile,
	deleteProfile
};
