import React, { PureComponent } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
class App extends PureComponent {
  state = {
    monsters: [],
    searchField: ''
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }
  render() {
    const { searchField, monsters } = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (

      <div className="App">
        <h1>Monsters Mostafa</h1>
        <SearchBox placeholder='Search Monster' handleChange={this.handleChange}></SearchBox>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
