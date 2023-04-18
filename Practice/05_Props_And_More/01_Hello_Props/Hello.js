class Hello extends React.Component {
  render() {
    const props = this.props;
    console.log(props);
    return (
      <h1>
        Hello {props.to} from {props.from}!
      </h1>
    );
  }
}
