import React, { Component } from 'react';
import axios from 'axios';

class SavedGames extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mySavedGames: []
		};
	}
	componentDidMount() {
		axios.get('/api/savedprofiles').then((res) => {
			this.setState({ mySavedGames: res.data });
		});
	}

	deleteSavedGame = (val) => {
		axios
			.delete('/api/savedprofiles/' + val.name)
			.then((res) => {
				this.setState({ mySavedGames: res.data });
			})
			.catch((err) => {
				console.log('error');
			});
	};

	render() {
		console.log(this.state.mySavedGames);
		let savedGames = this.state.mySavedGames.map((val) => {
			return (
				<section>
					<div className="maincard">
						<main className="card">
							<div className="gamescreated">
								<img src={val.image} alt="image" />
								<div className="container">
									<p>Name: {val.name}</p>
									<p>Game: {val.games}</p>
									<p>console: {val.consoles}</p>
									<div>
										<button onClick={() => this.deleteSavedGame(val)} className="hate">
											Hate
										</button>
									</div>
								</div>
							</div>
						</main>
					</div>
				</section>
			);
		});
		return <div className="savedGame">{savedGames}</div>;
	}
}

export default SavedGames;
