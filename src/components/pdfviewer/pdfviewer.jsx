import React, {Component} from 'react'
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import { withStyles } from '@material-ui/core';
import pdfviewerStyle from 'assets/jss/components/pdfviewer/pdfviewerStyle'
import QPoint from 'components/question/QPoint'
class PDFViewer extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
        width:1000,
        points:[{x: 10, y: 500, opactiy:0.5},{x: 200, y: 80, opactiy:0.5},{x: 500, y: 90, opactiy:0.5},],
        question: null,
        isShowQuestion: false
    }
    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    onAddPoint = function(e) {
        var x = e.nativeEvent.offsetX;
        var y = e.nativeEvent.offsetY;
        var opacity = 0.5;
        //ReactDOM.render(, document.getElementById('mast'));
    }

    render() {
        
        const { pageNumber, numPages, width, points } = this.state;
        const {classes} = this.props
        return (
            <div>
                <Document
                    file="ch1.pdf"
                    onLoadSuccess={this.onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} width={width} 
                    style={{zIndex: "5"}}/>
                </Document>
                <div className={classes.mask}
                    onClick={e=> this.onAddPoint(e)}
                    id="mask">
                    {points.map((point, index) =>{
                        return <QPoint key={index} x={point.x} y={point.y} opacity={point.opactiy} 
                        onUpdateQuestion={()=>this.props.onUpdateQuestion(point)}/>
                    })}
                </div>
                <p>Page {pageNumber} of {numPages}</p>
            </div>
        )
    }
}
export default withStyles(pdfviewerStyle)(PDFViewer)