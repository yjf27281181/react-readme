import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import questionStyle from "assets/jss/components/question/questionStyle";
import Comment from "components/question/Comment";
import Divider from "@material-ui/core/Divider";

import TextField from "@material-ui/core/TextField";
import Button from "components/custombuttons/Button.jsx";
import Favorite from "@material-ui/icons/Favorite";
import NavigationIcon from "@material-ui/icons/Navigation";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as frontActions } from "reducers/frontReducer";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      comments: [],
      content: ""
    };
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleContentChange = e => {
    this.setState({ content: e.target.value });
  };

  handleSendComment = () => {
    this.props.postComment({
      content: this.state.content,
      questionId: this.props.point.id,
      authorId: 1
    });
    console.log(this.state.comment);
    console.log(this.props.point);
  };

  render() {
    if (!this.props.isShowQuestion) {
      return null;
    }
    const { point } = this.props;
    const { classes } = this.props;
    return (
      <Card className={classes.card} style={{ top: point.pos_y }}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              颜
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={point.title}
          subheader={point.create_time}
        />
        <CardContent>
          <Typography component="p">{point.content}</Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <Divider />
          <Comment />
          <Divider />

          <TextField
            style={{ marginBottom: 0, marginTop: 20 }}
            id="standard-multiline-static"
            label="Multiline"
            multiline
            rows="4"
            defaultValue="Default Value"
            value={this.state.content}
            onChange={this.handleContentChange}
            //className={classes.textField}
            margin="normal"
            fullWidth
          />
          <Button color="info" round size="sm" onClick={this.handleSendComment}>
            <NavigationIcon className={classes.icons} /> send
          </Button>
        </Collapse>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.globalState.userInfo,
    comments: state.front.comments
  };
}
function mapDispatchToProps(dispatch) {
  return {
    postComment: bindActionCreators(frontActions.post_comment, dispatch)
    //register: bindActionCreators(IndexActions.get_register, dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(questionStyle)(Question));
