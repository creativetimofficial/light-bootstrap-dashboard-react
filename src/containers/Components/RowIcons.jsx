import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';

const codeExmaple = `<div className="row all-icons">
    <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
        <div className="font-icon-detail">
            <i className="pe-7s-next-2"></i>
            <input type="text" defaultValue="pe-7s-next-2" />
        </div>
    </div>
</div>`;

class RowIcons extends Component {
    render() {
        return (
            <div id="icons-row">
                <h2>Icons</h2>
                <p>
                    We used the default icons from <a target="_blank" rel="noopener noreferrer" href="http://themes-pixeden.com/font-demos/7-stroke/index.html">Pixeden</a>.
                </p>

                <h4>Example code</h4>
                <div className="row all-icons">
                    <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                        <div className="font-icon-detail">
                            <i className="pe-7s-next-2"></i>
                            <input type="text" defaultValue="pe-7s-next-2" />
                        </div>
                    </div>
                </div>

                <br />
                <SyntaxHighlighter language="html" style={monokaiSublime}>
                    {codeExmaple}
                </SyntaxHighlighter>
            </div>
        );
    }
}

export default RowIcons;
