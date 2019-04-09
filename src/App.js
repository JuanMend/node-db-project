import React, { Component } from 'react';
import Imglogo from './Components/Imglogo';
import './App.css';
import CreateGame from './Components/CreateGame';
import GamesCreated from './Components/GamesCreated';
import SavedGames from './Components/SavedGames';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			gamesCreated: [],
			page: 'home'
		};
	}

	createGameBtnHandler = () => {
		this.setState({ page: 'home' });
	};

	gamesCreatedHandler = () => {
		this.setState({ page: 'gamescreated' });
	};

	savedGames = () => {
		this.setState({ page: 'savedGames' });
	};

	render() {
		return (
			<main>
				<header>
					<p className="titleGame">Game</p>
					<nav className="navbar">
						<Imglogo />
					</nav>
					<p className="titlePicker">Picker</p>
				</header>

				<div className="posted">
					<button className="createGames" onClick={() => this.createGameBtnHandler()}>
						Create Game
					</button>
					<button className="gamesCreate" onClick={() => this.gamesCreatedHandler()}>
						Games Created
					</button>
					<button className="savedGames" onClick={() => this.savedGames()}>
						Saved Games
					</button>
				</div>

				{this.state.page === 'home' ? (
					<CreateGame
					// showGames={this.state.showGames}
					/>
				) : this.state.page === 'postToCreated' ? (
					<GamesCreated />
				) : this.state.page === 'savedGames' ? (
					<SavedGames />
				) : this.state.page === 'gamescreated' ? (
					<GamesCreated />
				) : (
					<p>Its not working</p>
				)}

				<div />
			</main>
		);
	}
}

export default App;
