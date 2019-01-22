import React, {Component} from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export default class QPoint extends Component {
    constructor(props) {
        super(props)
        this.props = props;
    }

    render() {
        //const {x, y, opacity} = this.props;
        return (
        <div>
            <Fab color="primary" aria-label="Add" style={{position: "absolute", 
            left: this.props.x, top: this.props.y, opacity: this.props.opacity}}
            onClick={()=>this.props.onUpdateQuestion()}>
            <AddIcon />
            </Fab>
        </div>
        )
    }
}