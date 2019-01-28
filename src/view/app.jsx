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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowQuestion: false,
      questionPoint: null,
      height: 400
    };
  }

  onUpdateQuestion = newPoint => {
    this.props.getComments(newPoint.id);
    this.setState({
      isShowQuestion: true,
      questionPoint: newPoint
    });
  };

  onCloseQuestion = () => {
    this.setState({ isShowQuestion: false });
  };

  setHeight = height => {
    this.setState({ height: height + 40 });
  };


  componentWillReceiveProps(nextProps) {
    this.setState({ 
      userInfo: nextProps.userInfo
    });

    if(nextProps.msg.type===1 && nextProps.msg.content ==='post comment') {
      this.props.getComments(this.state.questionPoint.id);
    }

  }

  componentDidMount() {
    this.props.userAuth();
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div
        className={classes.navigation}
        style={{ backgroundImage: "url(" + image + ")" }}
      >
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
                  />
                </div>
                <Question
                  point={this.state.questionPoint}
                  isShowQuestion={this.state.isShowQuestion}
                />
              </div>
            </Grid>
          </Grid>
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
    msg: state.globalState.msg
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getComments: bindActionCreators(frontActions.get_comments, dispatch),
    userAuth: bindActionCreators(IndexActions.user_auth, dispatch)
  };
}

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default withStyles(appStyle)(App);
