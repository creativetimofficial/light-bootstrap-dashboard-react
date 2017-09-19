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
            <div id="maps-row" className="tim-row">
                <h2>Map</h2>
                <legend></legend>
                <p>
                    For maps we've used some components from a react library <code>google-maps-react</code>.<br />
                    You can use it by simply importing the maps view in the page you want to render it:
                </p>
                <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                    {`import Maps from 'views/Maps/Maps';`}
                </SyntaxHighlighter>
                <p>
                    For this component to work, you will need a google maps API key
                </p>
                <p>
                    Follow these steps to get an API key:
                </p>
                <ol>
                    <li>Go to the <a href="https://console.developers.google.com/flows/enableapi?apiid=maps_backend,geocoding_backend,directions_backend,distance_matrix_backend,elevation_backend,places_backend&reusekey=true" target="_blank" rel="noopener noreferrer">Google API Console</a>.</li>
                    <li>Create or select a project.</li>
                    <li>Click Continue to enable the API and any related services.</li>
                    <li>On the Credentials page, get an API key.</li>
                    <li>Note: If you have an existing unrestricted API key, or a key with browser restrictions, you may use that key.</li>
                    <li>From the dialog displaying the API key, select Restrict key to set a browser restriction on the API key.</li>
                    <li>In the Key restriction section, select HTTP referrers (web sites), then follow the on-screen instructions to set referrers.</li>
                    <li>(Optional) Enable billing. See <a href="https://developers.google.com/maps/documentation/javascript/usage" target="_blank" rel="noopener noreferrer">Usage Limits</a> for more information.</li>
                </ol>
                <p>
                    After these steps navigate in your project to <code>views/Maps/Maps.jsx</code> and replace the <code>YOUR_KEY_HERE</code> with the given API KEY.
                </p>
                <p>
                    For more information regarding google maps API KEY navigate to this <a href="https://developers.google.com/maps/documentation/javascript/get-api-key" target="_blank" rel="noopener noreferrer">link</a>.
                </p>
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
