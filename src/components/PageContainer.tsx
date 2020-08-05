import { withStyles, WithStyles } from "@material-ui/core/styles";
import * as React from "react";
import FlexContainer from "./FlexContainer";
import NavBar from "./NavBar";
import Header from "./Header";
import VideoContainer from "./VideoContainer";
import InfoSection from "./InfoSection";

type Props = WithStyles<typeof styles> & {};

const infoSectionHeaders = {
  1: "Put car in ‘Reverse’",
  2: "View surroundings on display",
  3: "Listen for cues",
};

const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur  dolor.";

class PageContainer extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <FlexContainer flow="column" extraClasses={classes.contianer}>
        <NavBar />
        <Header />
        <VideoContainer />
        <InfoSection
          number="1"
          header={infoSectionHeaders[1]}
          infoText={loremIpsum}
        />
        <InfoSection
          number="2"
          header={infoSectionHeaders[2]}
          infoText={loremIpsum}
        />
        <InfoSection
          number="3"
          header={infoSectionHeaders[3]}
          infoText={loremIpsum}
        />
      </FlexContainer>
    );
  }
}

const styles = {
  contianer: {
    fontFamily: "Volvo Novum",
    marginBottom: "50px",
  },
};

export default withStyles(styles)(PageContainer);
