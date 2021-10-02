import { Component } from 'react';
import axios from 'axios';
import './App.css';

interface Monster {
  id: string;
  name: string;
  email: string;
}

interface AppState {
  readonly monsters: Monster[];
}

class App extends Component<{}, AppState> {
  state: AppState = {
    monsters: []
  }
  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(({ data: monsters }) => this.setState({ monsters }))
      .catch(console.error)
  }
  render() {
    return (
      <main className="App">
        <ul>
          {this.state.monsters.map(({id, name}) => <li key={id}>{name}</li>)}
        </ul>
      </main>
    );
  }
}

export default App;
