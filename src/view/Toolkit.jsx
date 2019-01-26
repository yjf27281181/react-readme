import React, { Component } from "react";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import toolkitStyle from "assets/jss/components/toolkit/toolkitStyle";
import { withStyles } from "@material-ui/core";

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actions as frontActions} from 'reducers/frontReducer'

class Toolkit extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      isAddingQuestion: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ points: nextProps.points });
  }

  onChangeMode = () => {
      this.setState({isAddingQuestion: !this.state.isAddingQuestion});
      this.props.onChangeMode(this.state.isAddingQuestion)
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.tool}>
        <Fab
          color="secondary"
          aria-label="Edit"
          onClick={this.onChangeMode}
        >
          <Icon>edit_icon</Icon>
        </Fab>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAddingQuestion: state.front.isAddingQuestion
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onChangeMode: bindActionCreators(frontActions.change_adding_mode, dispatch)
  };
}
export default withStyles(toolkitStyle)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Toolkit)
);
