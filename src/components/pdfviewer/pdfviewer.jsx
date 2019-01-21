import React, {Component} from 'react'
import { Document, Page } from 'react-pdf/dist/entry.webpack';
export default class PDFViewer extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
        width:1000,
    }
    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }
    render() {
        
        const { pageNumber, numPages, width } = this.state;
        return (
            <div style={{zIndex: "10"}} onMouseMove={(e) => console.log(e.target.offsetTop)}>
                <Document
                    file="ch1.pdf"
                    onLoadSuccess={this.onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} width={width} 
                    style={{zIndex: "5"}}/>
                </Document>
                <p>Page {pageNumber} of {numPages}</p>
            </div>
        )
    }
}