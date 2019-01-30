import React, { Component, PropTypes } from "react";
import AppBar from "view/Appbar";
import PDFViewer from "view/PDFViewer";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import image from "assets/img/bg.jpg";
import appStyle from "assets/jss/appStyle";
import Grid from "@material-ui/core/Grid";
import Question from "view/Question";
import ToolKit from "view/Toolkit";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as frontActions } from "reducers/frontReducer";
import { actions as IndexActions } from "reducers/index";
import SnackBar from "components/snackbar/SnackBar";
import NavigationPill from "view/NavigationPill";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeQuestion: null,
      height: 400,
      msgContent: "",
      msgType: "",
      isOpenSnackBar: false
    };
    this.onCloseSnackBar = this.onCloseSnackBar.bind(this);
  }

  onUpdateQuestion = question => {
    this.props.getComments(question.id);
    this.props.changeActiveQuestion(question)
  };

  setHeight = height => {
    this.setState({ height: height + 40 });
  };

  onCloseSnackBar() {
    this.setState({ isOpenSnackBar: false });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      userInfo: nextProps.userInfo,
      activeQuestion: nextProps.activeQuestion
    });

    if (nextProps.msg.type === 1 && nextProps.msg.content === "post comment") {
      this.props.getComments(this.state.activeQuestion.id);
      this.setState({
        msgContent: "post comment success",
        isOpenSnackBar: true,
        msgType: "success"
      });
    }

    if (nextProps.msg.type === 1 && nextProps.msg.content === "login success") {
      this.setState({
        msgContent: "welcome to course-reader",
        isOpenSnackBar: true,
        msgType: "success"
      });
    }

    if (
      nextProps.msg.type === 1 &&
      nextProps.msg.content === "register success"
    ) {
      this.setState({
        msgContent: "register success, please login",
        isOpenSnackBar: true,
        msgType: "success"
      });
    }

    if (
      nextProps.msg.type === 0 &&
      nextProps.msg.content === "register failed"
    ) {
      this.setState({
        msgContent: "username has been used",
        isOpenSnackBar: true,
        msgType: "error"
      });
    }

    if (nextProps.msg.type === 0 && nextProps.msg.content === "login failed") {
      this.setState({
        msgContent: "username or password is wrong",
        isOpenSnackBar: true,
        msgType: "error"
      });
    }
  }

  componentDidMount() {
    this.props.userAuth();
    this.props.getRecentQuestions();
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div
        className={classes.navigation}
        style={{ backgroundImage: "url(" + image + ")" }}
      >
        <SnackBar
          type={this.state.msgType}
          msg={this.state.msgContent}
          open={this.state.isOpenSnackBar}
          onClose={this.onCloseSnackBar}
        />
        <AppBar />

        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item xs={1}>
              <ToolKit />
            </Grid>
            <Grid item xs={11}>
              <div
                className={classNames(classes.main, classes.mainRaised)}
                style={{ height: this.state.height }}
              >
                <div className={classes.container}>
                  <PDFViewer
                    onUpdateQuestion={question =>
                      this.onUpdateQuestion(question)
                    }
                    setHeight={height => this.setHeight(height)}
                    onCloseQuestion={this.onCloseQuestion}
                    activeQuestion={this.state.activeQuestion}
                  />
                </div>
                {this.state.activeQuestion ? (
                  <Question question={this.state.activeQuestion} />
                ) : null}
              </div>
            </Grid>
          </Grid>
          <NavigationPill />
          <div href='www.baidu.com' style={{marginLeft:"auto", width: 200}}>juefeiya@usc.edu</div>
        </div>
        
      </div>
    );
  }
}

App.defaultProps = {
  userInfo: {}
};

App.propsTypes = {
  //userInfo:PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    userInfo: state.globalState.userInfo,
    msg: state.globalState.msg,
    activeQuestion: state.front.activeQuestion
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getComments: bindActionCreators(frontActions.get_comments, dispatch),
    userAuth: bindActionCreators(IndexActions.user_auth, dispatch),
    changeActiveQuestion: bindActionCreators(frontActions.change_active_question, dispatch),
    getRecentQuestions: bindActionCreators(frontActions.get_recent_questions, dispatch),
  };
}

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default withStyles(appStyle)(App);
