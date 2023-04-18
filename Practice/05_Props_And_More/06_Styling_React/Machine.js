class Machine extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props;
    const isWin = s1 === s2 && s1 === s3;
    const colors = {
      fontSize: "50px",
      backgroundColor: "purple",
      padding: "10px",
      margin: "30px",
    };
    return (
      <div className='Machine'>
        <p style={colors}>
          {s1} {s2} {s3}
        </p>
        <h4>
          You{" "}
          <span className={isWin ? "win" : "lose"}>
            {isWin ? "WIN 😈" : "LOSE 🙀"}
          </span>
          !
        </h4>
      </div>
    );
  }
}
