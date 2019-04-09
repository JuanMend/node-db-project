let createdGames = [];

const createGame = (req, res) => {
	res.json(createdGames);
};

const createdGame = (req, res) => {
	req.body.id = createdGames.length + 1;
	createdGames.push(req.body);
	res.status(200).json(createdGames);
};

const editProfile = (req, res) => {
	for (let i = 0; i < createdGames.length; i++) {
		if (createdGames[i].id === req.body.id) {
			createdGames[i].name = req.body.createName;
		}
	}
	res.status(200).json(createdGames);
};

module.exports = {
	createGame,
	createdGame,
	editProfile
};
