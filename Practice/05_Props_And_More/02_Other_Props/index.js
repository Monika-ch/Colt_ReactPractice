class App extends React.Component {
  render() {
    return (
      <div>
        <Hello
          to='Ringo'
          from='Paul'
          bangs={4}
          // stringNum='5' //string
          // num={3} //number
          // data={[1, 2, 3, 4, 5]} //array
          // isFunny={true} //true
          // isHappy //true
        />
        <Hello
          to='Cathy'
          from='Sassy'
          bangs={14}
          img='https://images.unsplash.com/photo-1681649953900-b6fe394d5c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
