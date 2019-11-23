import React, { Component } from "react";
import CardList from "./Components/Card-List/CardList";
import SearchBox from "./Components/searchBox/SearchBox";
import "./App.css";

class App extends Component {
  state = {
    monsters: [],
    searchField: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  searchFieldFunction = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          callSearch={this.searchFieldFunction}
          placeholder="search monsters"
        />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
