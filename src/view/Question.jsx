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
import ClosetIcon from "@material-ui/icons/Close";

import questionStyle from "assets/jss/components/question/questionStyle";
import Comment from "view/Comment";
import Divider from "@material-ui/core/Divider";

import TextField from "@material-ui/core/TextField";
import Button from "components/custombuttons/Button.jsx";
import NavigationIcon from "@material-ui/icons/Navigation";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as frontActions } from "reducers/frontReducer";

import colorUtil from "tool/colorUtil";
import Pagination from "components/pagination/Pagination.jsx";

import changeFormat from "tool/dateFormat"

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      comments: [],
      content: "",
      userInfo: {},
      commentPage: 1
    };
    this.onChangePage = this.onChangePage.bind(this)
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleContentChange = e => {
    this.setState({ content: e.target.value });
  };

  handleSendComment = () => {
    if (!this.state.userInfo.username) {
      alert("please login first");
      return;
    }
    this.props.postComment({
      content: this.state.content,
      questionId: this.props.question.id,
      authorId: this.state.userInfo.userId
    });
    this.setState({ content: "" });
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      comments: nextProps.comments,
      userInfo: nextProps.userInfo,
      commentPage: 1,
      expanded: false
    });
  }

  onChangePage(text) {
    const {commentPage, comments} = this.state;
    if(text ==='PREV'&& commentPage>1) {
      this.setState({commentPage: commentPage-1})
    }

    if(text ==='NEXT'&& commentPage*5<comments.length) {
      this.setState({commentPage: commentPage+1})
    }

  }

  render() {
    const { question } = this.props;
    const { classes } = this.props;
    const {commentPage} = this.state;
    return (
      <Card className={classes.card} style={{ top: question.pos_y }}>
        <CardHeader
          avatar={
            <Avatar
              aria-label="Recipe"
              className={classes.avatar}
              style={{ backgroundColor: colorUtil(question.username) }}
            >
              {question.username.substring(0, 3)}
            </Avatar>
          }
          action={
            <IconButton onClick={() =>{this.props.changeActiveQuestion(null)}}>
              <ClosetIcon />
            </IconButton>
          }
          title={question.title}
          subheader={
            question.username + " - " + changeFormat(question.create_time.substring(0, 10))
          }
        />
        <CardContent>
          <Typography component="p">{question.content}</Typography>
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
          {this.state.comments.slice((commentPage-1)*5, commentPage*5).map((data, index) => {
            return <Comment data={data} key={index} index={index} />;
          })}

          <div style={{ textAlign: "center" }}>
            <Pagination
              onClick={this.onChangePage}
              pages={[{text: 'PREV'},{active: true ,text: commentPage},{text: 'NEXT'}]}
              color="primary"
            />
          </div>
          <Divider />

          <TextField
            style={{ marginBottom: 0, marginTop: 20 }}
            id="standard-multiline-static"
            label="&nbsp;&nbsp;&nbsp; Reply: "
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
    postComment: bindActionCreators(frontActions.post_comment, dispatch),
    changeActiveQuestion: bindActionCreators(frontActions.change_active_question, dispatch),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(questionStyle)(Question));
