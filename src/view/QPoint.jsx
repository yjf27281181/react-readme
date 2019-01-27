import React, {Component} from 'react';
import IconButton from '@material-ui/core/IconButton';
import HelpIcon from '@material-ui/icons/Help';

export default class QPoint extends Component {
    constructor(props) {
        super(props)
        this.props = props;
    }

    render() {
        //const {x, y, opacity} = this.props;
        var {questionData} = this.props;
        return (
        <div>
            <IconButton aria-label="help"
            color="primary"
            style={{position: "absolute", 
            left: questionData.pos_x, top: questionData.pos_y, opacity: 0.2}}
            onClick={(e)=>{
                e.stopPropagation()
                this.props.onUpdateQuestion()}
            }>
                <HelpIcon />
            </IconButton>
        </div>
        )
    }
}