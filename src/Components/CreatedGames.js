import React from 'react';

function CreatedGames(props) {
	return (
		<section>
			<p className="typeOfGames">What type of games do you play</p>
			<select onChange={props.handlerChange} name="games" className="optionGames">
				<option value="Default">Default</option>
				<option value="FPS">FPS</option>
				<option value="MOBA">MOBA</option>
				<option value="ACTION">ACTION</option>
				<option value="RPG"> RPG</option>
				<option value="SPORTS">SPORTS</option>
			</select>
		</section>
	);
}

export default CreatedGames;
