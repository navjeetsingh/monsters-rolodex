import React, { Component } from 'react';
import CardList from './component/CardList/CardList.component';
import SearchBox from './component/SearchBox/SearchBox.component';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			monsters: [],
			searchField: ''
		};
	}

	handleChange = e => {
		this.setState({
			searchField: e.target.value
		});
	};

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ monsters: users }));
	}
	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter(monster =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);
		return (
			<div className="App">
				<SearchBox
					searchField={searchField}
					placeholder="Search Monsters"
					handleChange={this.handleChange}
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
