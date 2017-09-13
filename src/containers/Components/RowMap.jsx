import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';

import Maps from 'views/Maps/Maps';

const codeExample = `class Maps extends Component{
    render() {
        return (
            <div id="map">
                <Map
                    style={{width: '100%', height: '100%', position: 'relative'}}
                    google={this.props.google}
                    initialCenter={{
                        lat: 40.7484405,
                        lng: -73.9856644
                    }}
                    zoom={13}
                    >
                        <Marker onClick={this.onMarkerClick}
                            name={'Current location'}
                        />
                    </Map>
                </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "YOUR_KEY_HERE"
})(Maps)`;


class RowMap extends Component {
    render() {
        return (
            <div id="maps-row">
                <h2>Map</h2>
                <p>
                    For maps we've used some components from a react library <code>google-maps-react</code>.
                </p>
                <p>
                    You can use it by simply importing the maps view in the page you want to render it:
                </p>
                <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                    {`import Maps from 'views/Maps/Maps';`}
                </SyntaxHighlighter>
                <h4>Example code</h4>
                <Maps />
                <SyntaxHighlighter language="react" style={monokaiSublime}>
                    {codeExample}
                </SyntaxHighlighter>

                <h4>Details</h4>
                <p>
                    For more details you can refer to{' '}
                    <a
                        href="https://github.com/fullstackreact/google-maps-react"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            google-maps-react documentation
                        </a>.
                    </p>
                </div>
        );
    }
}

export default RowMap;
