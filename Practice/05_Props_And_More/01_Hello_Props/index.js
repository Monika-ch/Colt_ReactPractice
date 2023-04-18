class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to='Ringo' from='Paul' />
        <Hello to='Sakshi' from='Aman' />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
