import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actions as frontActions} from 'reducers/frontReducer'

class QuestionDialog extends React.Component {
  state = {
    title: "",
    content:"",
    userInfo: undefined
  }

  handleTitleChange(e) {
    this.setState({
      title: e.target.value
    });
  }

  handleContentChange(e) {
    this.setState({
      content: e.target.value
    });
  }

  handleSumbmit() {
    this.props.postQuestion({
      posX: this.props.posX,
      posY: this.props.posY,
      pageNum: this.props.pageNumber,
      pdfName: this.props.pdfName,
      title: this.state.title, 
      content: this.state.content,
      authorId: 1
    });
    this.props.close();
  }
  handleCancel() {
    this.props.close();
  }

  render() {
    return (
      <div >
        <Dialog
          open={this.props.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          fullWidth
          fullHeight
        >
          <DialogTitle id="form-dialog-title">New Question</DialogTitle>
          <DialogContent>
            <DialogContentText>Please enter your questiona</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="question title"
              type="text"
              fullWidth
              value={this.state.title}
              ref={(input) => {this.title = input; }}
              onChange={e => this.handleTitleChange(e)}
            />
            <DialogContentText>Please enter description</DialogContentText>
            <TextField
              id="outlined-multiline-flexible"
              label="description"
              multiline
              rows="4"
              onChange={e => this.handleContentChange(e)}
              value={this.state.content}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() =>this.handleCancel()} color="primary">
              Cancel
            </Button>
            <Button onClick={() => this.handleSumbmit()} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{
    userInfo: state.globalState.userInfo
  }
}
function mapDispatchToProps(dispatch) {
  return{
      postQuestion: bindActionCreators(frontActions.post_question, dispatch),
      //register: bindActionCreators(IndexActions.get_register, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionDialog)
