import { withStyles, WithStyles } from "@material-ui/core/styles";
import * as React from "react";
import FlexContainer from "./FlexContainer";

type Props = WithStyles<typeof styles> & {
  number: string;
  header: string;
  infoText: string;
};

class InfoSection extends React.Component<Props> {
  render() {
    const { number, header, infoText, classes } = this.props;
    return (
      <FlexContainer flow="column" extraClasses={classes.infoContainer}>
        <div className={classes.number}>{number}</div>
        <div className={classes.header}>{header}</div>
        <div className={classes.infoText}>{infoText}</div>
      </FlexContainer>
    );
  }
}

const styles = {
  infoContainer: {
    marginTop: "50px",
  },
  number: {
    color: "#707070",
    fontSize: "36px",
    fontWeight: 500,
    marginLeft: "25px",
  },
  header: {
    color: "#141414",
    fontSize: "22px",
    marginTop: "20px",
    fontWeight: 500,
    marginLeft: "25px",
  },
  infoText: {
    color: "#707070",
    fontSize: "22px",
    marginTop: "10px",
    marginLeft: "25px",
  },
};

export default withStyles(styles)(InfoSection);
