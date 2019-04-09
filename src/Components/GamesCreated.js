import React, { Component } from 'react';
import axios from 'axios';

class GamesCreated extends Component {
	constructor(props) {
		super(props);
		this.state = {
			createdGames: [],
			gamesCreated: [],
			createName: '',
			index1: '',
			show: false
		};
	}

	componentDidMount() {
		axios.get('/api/creategame').then((response) => {
			this.setState({ createdGames: response.data });
		});
	}

	updateSave = (val) => {
		axios
			.post('/api/savedprofiles', val)
			.then((res) => {
				this.setState({ gamesCreated: res.data });
			})
			.catch((err) => {
				console.log('error');
			});
	};

	updateEdit = (id) => {
		axios
			.put('/api/savedprofiles/', {
				createName: this.state.createName,
				id: id
			})
			.then((res) => {
				console.log(res.data);
				this.setState({ createdGames: res.data, createName: '' });
			})
			.catch((err) => {
				console.log('error');
			});
	};

	toggle = (index) => {
		const { show } = this.state;
		this.setState({
			show: !show,
			index1: index
		});
	};

	handlerChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		let post = this.state.createdGames.map((val, index) => {
			return (
				<section>
					<div className="maincard">
						<main className="card">
							<div className="gamescreated">
								<img src={val.image} alt="image" />

								<div className="container">
									<p onClick={() => this.toggle(index)} className="nameEditOnClick">
										Name: {val.name}
									</p>
									{this.state.show !== false && this.state.index1 === index ? (
										<input
											type="text"
											name="createName"
											value={this.state.createName}
											onChange={this.handlerChange}
											placeholder="Enter Name"
											required
										/>
									) : null}

									<p>Game: {val.games}</p>
									<p>console: {val.consoles}</p>
									<div>
										<button className="save" onClick={() => this.updateSave(val)}>
											Save
										</button>
										{this.state.show !== false && this.state.index1 === index ? (
											<button className="edit" onClick={() => this.updateEdit(val.id)}>
												Edit
											</button>
										) : null}
									</div>
								</div>
							</div>
						</main>
					</div>
				</section>
			);
		});

		return <div className="bodyPost">{post}</div>;
	}
}

export default GamesCreated;
