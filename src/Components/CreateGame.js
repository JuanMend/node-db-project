import React, { Component } from 'react';
import GamesCreated from './GamesCreated';
import axios from 'axios';
import CreatedGames from './CreatedGames';

class CreateGame extends Component {
	constructor(props) {
		super(props);

		this.state = {
			image: '',
			name: '',
			games: [],
			consoles: []
		};
	}

	updateGame = (e) => {
		e.preventDefault();
		axios
			.post('/api/creategame', {
				name: this.state.name,
				image: this.state.image,
				games: this.state.games,
				consoles: this.state.consoles
			})
			.then((response) => {
				this.setState({ createdGames: response.data });
			})
			.catch((err) => {
				console.log('error');
			});
	};

	handlerChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		return (
			<form onSubmit={this.updateGame} className="postImgBody">
				<input
					onChange={this.handlerChange}
					name="name"
					placeholder="Enter Your Name"
					className="yourNamePlaceHolder"
				/>
				<CreatedGames handlerChange={this.state.handlerChange} />

				<input
					onChange={this.handlerChange}
					name="image"
					className="imageurl"
					placeholder="Image URL"
					type="text"
				/>

				<p className="pickConsole"> Pick console</p>
				<select onChange={this.handlerChange} name="consoles" className="optionConsole">
					<option value="Default">Default</option>
					<option value="Xbox One">Xbox One</option>
					<option value="Ps4">Ps4</option>
				</select>

				<div className="formBtn">
					<button className="post" type="submit">
						Post
					</button>

					<button className="reset" type="reset" onClick={() => this.handlerChange}>
						Reset
					</button>
				</div>
			</form>
		);
	}
}

export default CreateGame;
