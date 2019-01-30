import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";

import Typography from "@material-ui/core/Typography";
import commentStyle from "assets/jss/components/question/commentStyle";
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import colorUtil from "tool/colorUtil";
import changeFormat from "tool/dateFormat"

class Comment extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const { classes, data, index} = this.props;
    const {} = this.props;
    return (
      <Grid container spacing={8} wrap="nowrap">
        <Grid item>
          <Avatar className={classes.orangeAvatar}
          style={{backgroundColor: colorUtil(data.username)}}>{data.username.substring(0,3)}</Avatar>
        </Grid>
        <Grid item>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <Typography bold inline={true}>
                {data.username}
              </Typography>{" "}
              <Typography light="true" inline={true}>
                #{index+1}
              </Typography>{" "}
              <Typography light="true" inline={true}>
                ·
              </Typography>{" "}
              <Typography light="true" inline="true">
                {changeFormat(data.create_time.substring(0, 10))}
              </Typography>
              <Typography>
                {data.content}
              </Typography>
            </Grid>
            <Grid item xs={12}>
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
