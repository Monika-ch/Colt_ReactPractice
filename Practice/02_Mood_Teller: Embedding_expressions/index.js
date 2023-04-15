function getMood() {
  const moods = [
    "Angry",
    "Hungry",
    "Silly",
    "Quiet",
    "Paranoid",
    "Sad",
    "Happy",
    "Depressed",
    "Excited",
  ];
  return moods[Math.floor(Math.random() * moods.length)];
}

class Mood extends React.Component {
  render() {
    return (
      <div>
        <h1>
          My Current Mood is: <span>{getMood()}</span>
        </h1>
      </div>
    );
  }
}

ReactDOM.render(<Mood />, document.getElementById("root"));
