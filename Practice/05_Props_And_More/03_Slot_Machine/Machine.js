class Machine extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props;
    // let isWin;
    // if (s1 === s2 && s1 === s3) {
    //   isWin = "WIN 😈";
    // } else {
    //   isWin = "LOSE 🙀";
    // }
    // return (
    //   <div>
    //     <h3>
    //       {s1} {s2} {s3}
    //     </h3>
    //     <p>You {isWin}!</p>
    //   </div>
    // );

    const isWin = (s1 === s2 && s1 === s3);
    return (
      <div>
        <p>
          {s1} {s2} {s3}
        </p>
        <p>You {isWin ? "WIN 😈" : "LOSE 🙀"}!</p>
      </div>
    );
  }
}
