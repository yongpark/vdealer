import { withStyles, WithStyles } from "@material-ui/core/styles";
import * as React from "react";
import FlexContainer from "./FlexContainer";

type Props = WithStyles<typeof styles> & {};

class Header extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <FlexContainer
        flow="column"
        justifyContent="center"
        alignContent="center"
        extraClasses={classes.headerContainer}
      >
        <div className={classes.textContainer}>
          <div className={classes.topText}>Volvo 360 camera</div>
          <div className={classes.bottomText}>See everything then drive</div>
        </div>
      </FlexContainer>
    );
  }
}

const styles = {
  headerContainer: {
    backgroundColor: "#FFFFFF",
    height: "75px",
    marginTop: "125px",
  },
  textContainer: {
    margin: "auto",
  },
  topText: {
    fontSize: "36px",
    fontWeight: 450,
  },
  bottomText: {
    fontSize: "28px",
    color: "#707070",
    fontWeight: 290,
    marginTop: "15px",
  },
};

export default withStyles(styles)(Header);
