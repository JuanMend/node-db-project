const express = require('express');
const app = express();
const { createGame, createdGame, editProfile } = require('./Controller/getCreatedGame');
const { savedProfile, saved, deleteProfile } = require('./Controller/getGamesCreated');

const PORT = 7000;

app.use(express.json());
app.get('/api/creategame', createGame);
app.post('/api/creategame', createdGame);

app.get('/api/savedprofiles', saved);
app.post('/api/savedprofiles', savedProfile);
app.put('/api/savedprofiles/', editProfile);
app.delete('/api/savedprofiles/:name', deleteProfile);

app.listen(PORT, () => {
	console.log(`listening on ${PORT}`);
});
