import { withStyles, WithStyles } from "@material-ui/core/styles";
import * as React from "react";
import FlexContainer from "./FlexContainer";
import ReactPlayer from "react-player";

type Props = WithStyles<typeof styles> & {};

class VideoContainer extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <FlexContainer flow="column" extraClasses={classes.videoContainer}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=wU5upOlK8M8"
          muted={true}
          playing={true}
          class={classes.video}
          width={"100%"}
        />
      </FlexContainer>
    );
  }
}

const styles = {
  videoContainer: {
    marginTop: "100px",
  },
  video: {
    margin: "auto",
  },
};

export default withStyles(styles)(VideoContainer);
