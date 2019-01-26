import React, { Component, PropTypes } from "react";
import AppBar from "./appbar/Appbar";
import PDFViewer from "./pdfviewer/PDFViewer";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import image from "assets/img/bg.jpg";
import appStyle from "assets/jss/appStyle";
import Grid from "@material-ui/core/Grid";
import Question from "components/question/Question";
import ToolKit from "components/toolkit/Toolkit";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as frontActions } from "reducers/frontReducer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 2,
      isShowQuestion: false,
      questionPoint: null
    };
    this.numPages = null;
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  onUpdateQuestion = newPoint => {
    this.props.getComments(newPoint.id);
    this.setState({
      isShowQuestion: true,
      questionPoint: newPoint
    });
  };

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <div
          id="bgImg"
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "100% 100%"
          }}
        >
          <AppBar userInfo="a" />
          <div className={classes.root}>
            <Grid container spacing={24}>
              <Grid item xs={1}>
                <ToolKit />
              </Grid>
              <Grid item xs={11}>
                <div className={classNames(classes.main, classes.mainRaised)}>
                  <div className={classes.container}>
                    <PDFViewer
                      onUpdateQuestion={question =>
                        this.onUpdateQuestion(question)
                      }
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
    userInfo: state.globalState.userInfo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getComments: bindActionCreators(frontActions.get_comments, dispatch)
    //register: bindActionCreators(IndexActions.get_register, dispatch)
  };
}

connect(
  mapStateToProps,
  mapDispatchToProps
);

export default withStyles(appStyle)(App);
