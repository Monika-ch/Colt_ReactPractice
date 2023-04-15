// class Hello extends React.Component {
//   render() {
//     return <h1>Hello there!</h1>;
//   }
// }
// ReactDOM.render(<Hello />, document.getElementById("root"));

function Hello() {
  return (
    <div>
      <h1>Hello there!</h1>;
    </div>
  );
}

ReactDOM.render(<Hello />, document.getElementById("root"));
