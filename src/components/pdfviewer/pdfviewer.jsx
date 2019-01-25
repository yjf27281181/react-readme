import React, { Component } from "react";
import { Document, Page } from "react-pdf/dist/entry.webpack";
import { withStyles } from "@material-ui/core";
import pdfviewerStyle from "assets/jss/components/pdfviewer/pdfviewerStyle";
import QPoint from "components/question/QPoint";
import QuestionDialog from "components/question/QuestionDialog";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as frontActions } from "reducers/frontReducer";

class PDFViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pdfName: "ch1.pdf",
      numPages: null,
      pageNumber: 1,
      width: 1000,
      points: [],
      question: null,
      isShowQuestion: false,
      isOpenQuestionDialog: false
    };
    this.posX = 0;
    this.posY = 0;
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  onAddPoint = function(e) {
    var points = this.state.points;
    points.push({ x: this.posX, y: this.posY, opacity: 0.5 });
    this.setState({ points: points });
  };

  onCloseQuestionDialog = function() {
    this.setState({ isOpenQuestionDialog: false });
  }.bind(this);

  render() {
    const { pageNumber, numPages, width, points } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <Document
          file={this.state.pdfName}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} width={width} style={{ zIndex: "5" }} />
        </Document>
        <div
          className={classes.mask}
          onClick={e => {
            this.posX = e.nativeEvent.offsetX - 24;
            this.posY = e.nativeEvent.offsetY - 24;
            this.setState({ isOpenQuestionDialog: true });
          }}
          id="mask"
        >
          {points.map((point, index) => {
            return (
              <QPoint
                key={index}
                x={point.x}
                y={point.y}
                opacity={point.opactiy}
                onUpdateQuestion={() => this.props.onUpdateQuestion(point)}
              />
            );
          })}
        </div>
        <QuestionDialog
          open={this.state.isOpenQuestionDialog}
          close={this.onCloseQuestionDialog}
          pageNumber={this.state.pageNumber}
          pdfName={this.state.pdfName}
          onAddPoint={this.onAddPoint}
          posX={this.posX}
          posY={this.posY}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.globalState.userInfo
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getQuestion: bindActionCreators(frontActions.get_question, dispatch)
    //register: bindActionCreators(IndexActions.get_register, dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(pdfviewerStyle)(PDFViewer));
