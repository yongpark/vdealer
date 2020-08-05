import { withStyles, WithStyles } from "@material-ui/core/styles";
import * as React from "react";
import FlexContainer from "./FlexContainer";
import chat from "../icons/chat.svg";
import menu from "../icons/menu.svg";
import logo from "../icons/logo.svg";

type Props = WithStyles<typeof styles> & {};

class Navbar extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <FlexContainer
        flow="row"
        justifyContent="space-between"
        extraClasses={classes.navbarContainer}
      >
        <img src={logo} alt="logo" className={classes.logo} />
        <FlexContainer
          flow="row"
          extraClasses={classes.rightContainer}
          justifyContent="space-between"
        >
          <img src={chat} alt="chat" />
          <img src={menu} alt="menu" />
        </FlexContainer>
      </FlexContainer>
    );
  }
}

const styles = {
  navbarContainer: {
    backgroundColor: "#FAFAFA",
    borderBottom: "solid 1px #D8D8D8",
    height: "75px",
  },
  rightContainer: {
    width: "85px !important",
    marginRight: "25px",
  },
  logo: {
    marginLeft: "25px",
    width: "120px",
  },
};

export default withStyles(styles)(Navbar);
