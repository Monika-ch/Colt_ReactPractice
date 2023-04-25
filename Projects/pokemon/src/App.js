import "./App.css";
import Pokegame from "./Pokegame";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Pokemon</h1>
      </header>
      <Pokegame />
      <div className='App-footer'>
        <p>$ PokemOn $</p>
      </div>
    </div>
  );
}

export default App;
