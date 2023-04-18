class Hello extends React.Component {
  static defaultProps = {
    from: "Anonymous",
    bangs: 1,
  };
  render() {
    console.log(this.props);
    let bangs = "!".repeat(this.props.bangs);
    return (
      <div>
        <p>
          Hello {this.props.to} from {this.props.from}
          {bangs}
        </p>
      </div>
    );
  }
}
