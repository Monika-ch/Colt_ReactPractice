import React, { Component } from "react";

class IconList extends Component {
  static defaultProps = {
    options: [
      "angry",
      "anchor",
      "archive",
      "at",
      "archway",
      "baby",
      "belt",
      "bolt",
      "bone",
      "car",
      "city",
      "cloud",
      "couch",
    ],
  };
  constructor(props) {
    super(props);
    this.state = { icons: [] };
    this.addIcon = this.addIcon.bind(this);
  }
  // addIcon() {
  //   let idx = Math.floor(Math.random() * this.props.options.length);
  //   let newIcon = this.props.options[idx];
  //   let curIcons = this.state.icons;
  //   curIcons.push(newIcon);
  //   this.setState({ icons: curIcons });
  // }
  addIcon() {
    let idx = Math.floor(Math.random() * this.props.options.length);
    let newIcon = this.props.options[idx];
    console.log([...this.state.icons, newIcon]);
    this.setState({ icons: [...this.state.icons, newIcon] });
  }
  render() {
    const icons = this.state.icons.map((i) => <i className={`fas fa-${i}`} />);
    return (
      <div>
        <h1>Icons:</h1>
        <h1>{icons}</h1>
        <button onClick={this.addIcon}>Add New Icon</button>
      </div>
    );
  }
}

export default IconList;
