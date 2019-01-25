import React, {Component} from 'react';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import HelpIcon from '@material-ui/icons/Help';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

export default class QPoint extends Component {
    constructor(props) {
        super(props)
        this.props = props;
    }

    render() {
        //const {x, y, opacity} = this.props;
        console.log(this.props)
        return (
        <div>
            <IconButton aria-label="help"
            color="primary"
            style={{position: "absolute", 
            left: this.props.x, top: this.props.y, opacity: 0.2}}
            onClick={()=>this.props.onUpdateQuestion()}>
                <HelpIcon />
            </IconButton>
        </div>
        )
    }
}