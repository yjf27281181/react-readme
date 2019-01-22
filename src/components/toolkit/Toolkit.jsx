import React, {Component} from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';


export default class Toolkit extends Component {
    constructor(props) {
        super(props)
        this.props = props;
    }

    render() {
        //const {x, y, opacity} = this.props;
        return (
        <div>
            <Fab color="primary" aria-label="Add">
                <AddIcon />
            </Fab>
            <Fab color="primary" aria-label="Add">
                <AddIcon />
            </Fab>
            <Fab color="secondary" aria-label="Edit">
                <Icon>edit_icon</Icon>
            </Fab>
        </div>
        )
    }
}