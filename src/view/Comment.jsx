import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";

import Typography from "@material-ui/core/Typography";
import commentStyle from "assets/jss/components/question/commentStyle";
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={8} wrap="nowrap">
        <Grid item>
          <Avatar className={classes.orangeAvatar}>N</Avatar>
        </Grid>
        <Grid item>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <Typography bold inline={true}>
                Dan Abramov
              </Typography>{" "}
              <Typography light="true" inline={true}>
                #1
              </Typography>{" "}
              <Typography light="true" inline={true}>
                ·
              </Typography>{" "}
              <Typography light="true" inline="true">
                Dec 17
              </Typography>
              <Typography>
                In a way CSS is like Redux. You can learn the rules quickly.
                That may mislead you into thinking. Trade same
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <IconButton>
                <Icon light={true} text={true}>
                  mode_comment
                </Icon>
              </IconButton>
              <Typography light={true} inline={true}>
                24
              </Typography>

              <IconButton danger={true}>
                <Icon light={true} text={true}>
                  favorite_border
                </Icon>
              </IconButton>
              <Typography light={true} inline={true} danger={true}>
                661
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(commentStyle)(Comment);
