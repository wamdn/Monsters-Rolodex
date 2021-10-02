import { Component } from 'react';
import './App.css';

interface Monster {
  name: string;
}

interface AppState {
  readonly monsters: Monster[];
}

class App extends Component<{}, AppState> {
  state: AppState = {
    monsters: [
      { name: 'Frankenstein' },
      { name: 'Frankenstein' },
      { name: 'Frankenstein' }
    ]
  }
  render() {
    return (
      <main className="App">

      </main>
    );
  }
}

export default App;
