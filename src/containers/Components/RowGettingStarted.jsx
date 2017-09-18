import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';


class RowGettingStarted extends Component {
    render() {
        return (
            <div id="getting-started-row" className="tim-row">
                <h2>Getting started</h2>
                <legend></legend>
                <p>
                    <b>The Light Bootstrap Dashboard with React</b> is built on top of Bootstrap 3, so you can safely use it on your
                    existing or new Bootstrap project. No line of code from Bootstrap 3 was changed, so you don't have to worry about
                    undesired effects in your work.
                </p>
                <ul>
                    <li>Install NodeJs from <a href="https://nodejs.org/en/">NodeJs Official Page</a></li>
                    <li>Open Terminal</li>
                    <li>Go to your file project</li>
                    <li>
                        Run in terminal:
                        <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                            {`npm install`}
                        </SyntaxHighlighter>
                    </li>
                    <li>
                        Then:
                        <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                            {`npm start`}
                        </SyntaxHighlighter>
                    </li>
                    <li>
                        Navigate to <a href="http://localhost:3000">http://localhost:3000</a>
                    </li>
                </ul>
                <p>You can additionaly use these commands:</p>
                <ul>
                    <li>
                        in terminal
                        <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                            {`npm test`}
                        </SyntaxHighlighter>
                        (runs the test watcher in an interactive mode)
                    </li>
                    <li>
                        in terminal
                        <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                            {`npm run build`}
                        </SyntaxHighlighter>
                        (builds the app for production to the <code>build</code> folder)
                    </li>
                </ul>
                <p>Also, for additional information you can refer to{' '}
                    <a
                        href="https://github.com/facebookincubator/create-react-app/blob/master/README.md#getting-started"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            Create React App documentation
                        </a>.
                </p>
                </div>

            );
        }
}

export default RowGettingStarted;
