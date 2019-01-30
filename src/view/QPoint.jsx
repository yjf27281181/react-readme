import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import HelpIcon from "@material-ui/icons/Help";
import colorUtil from "tool/colorUtil";

export default class QPoint extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { opacity } = this.props;
    var { question } = this.props;
    return (
      <div>
        <IconButton
          aria-label="help"
          style={{
            position: "absolute",
            color: colorUtil(question.username),
            left: question.pos_x,
            top: question.pos_y,
            opacity: opacity
          }}
          onClick={e => {
            e.stopPropagation();
            this.props.onUpdateQuestion();
          }}
          id={"question#"+question.id}
        >
          <HelpIcon />
        </IconButton>
      </div>
    );
  }
}
