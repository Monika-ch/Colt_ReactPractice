class Hello extends React.Component {
  render() {
    console.log(this.props);
    let bangs = "!".repeat(this.props.bangs);
    return (
      <div>
        <p>
          Hello {this.props.to} from {this.props.from}
          {bangs}
        </p>
        <img src={this.props.img} width='400px' />
      </div>
    );
  }
}
