import "./App.css";
import Game from "./Game";
import Game2 from "./Game2";
// import Rando from "./Rando";
import BrokenClick from "./BrokenClick";

function App() {
  return (
    <div className='App'>
      <Game />
      <Game2 />
      {/* <Rando maxNum={7} /> */}
      <BrokenClick />
    </div>
  );
}

export default App;
