import React, {Component} from 'react'
import AppBar from './appbar/appbar'
import PDFViewer from './pdfviewer/pdfviewer';
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import image from "assets/img/bg.jpg";
import appStyle from 'assets/jss/appStyle'
import Grid from '@material-ui/core/Grid';
import Question from 'components/question/question'
class App extends Component {
    state = {
        numPages: null,
        pageNumber: 2,
    }
    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }
    render() {
        const { classes, ...rest } = this.props;
        return (
            <div>
                <div id="bgImg" style={{ backgroundImage: "url(" + image + ")", backgroundSize:"100% 100%"}}>

                    <AppBar/>
                    <div className={classes.root}>
                        <Grid container spacing={24}>
                            <Grid item xs={1}>
                                aaa
                            </Grid>
                            <Grid item xs={11}>
                                <div className={classNames(classes.main, classes.mainRaised)}>
                                    <div className={classes.container}>
                                        <PDFViewer/>
                                    </div>
                                    <Question/>
                                </div>
                                
                            </Grid>
                        </Grid>
                    </div>
                    
                    
                </div>
                
            </div>
        )
    }
}

export default withStyles(appStyle)(App);