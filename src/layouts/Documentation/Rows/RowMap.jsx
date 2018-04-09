import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";

import Maps from "views/Maps/Maps";

const codeExample = `import React from "react";
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const CustomMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true
      }}
    >
      <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
    </GoogleMap>
  ))
);

function Maps({ ...prop }) {
  return (
    <CustomMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE"
      loadingElement={<div style={{ height: \`100%\` }} />}
      containerElement={<div style={{ height: \`100vh\` }} />}
      mapElement={<div style={{ height: \`100%\` }} />}
    />
  );
}

export default Maps;
`;

class RowMap extends Component {
  render() {
    return (
      <div id="maps-row" className="tim-row">
        <h2>React Google Maps v9.4.5</h2>
        <legend />
        <p>
          For maps we've used some components from a react library{" "}
          <code>react-google-maps</code>.<br />
          You can use it by simply importing the maps view in the page you want
          to render it:
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {`import Maps from 'views/Maps/Maps';`}
        </SyntaxHighlighter>
        <p>For this component to work, you will need a google maps API key</p>
        <p>Follow these steps to get an API key:</p>
        <ol>
          <li>
            Go to the{" "}
            <a
              href="https://console.developers.google.com/flows/enableapi?apiid=maps_backend,geocoding_backend,directions_backend,distance_matrix_backend,elevation_backend,places_backend&reusekey=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google API Console
            </a>.
          </li>
          <li>Create or select a project.</li>
          <li>Click Continue to enable the API and any related services.</li>
          <li>On the Credentials page, get an API key.</li>
          <li>
            Note: If you have an existing unrestricted API key, or a key with
            browser restrictions, you may use that key.
          </li>
          <li>
            From the dialog displaying the API key, select Restrict key to set a
            browser restriction on the API key.
          </li>
          <li>
            In the Key restriction section, select HTTP referrers (web sites),
            then follow the on-screen instructions to set referrers.
          </li>
          <li>
            (Optional) Enable billing. See{" "}
            <a
              href="https://developers.google.com/maps/documentation/javascript/usage"
              target="_blank"
              rel="noopener noreferrer"
            >
              Usage Limits
            </a>{" "}
            for more information.
          </li>
        </ol>
        <p>
          After these steps navigate in your project to{" "}
          <code>views/Maps/Maps.jsx</code> and replace the{" "}
          <code>YOUR_KEY_HERE</code> with the given API KEY.
        </p>
        <p>
          For more information regarding google maps API KEY navigate to this{" "}
          <a
            href="https://developers.google.com/maps/documentation/javascript/get-api-key"
            target="_blank"
            rel="noopener noreferrer"
          >
            link
          </a>.
        </p>
        <h4>Example code</h4>
        <Maps />
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExample}
        </SyntaxHighlighter>

        <h4>Details</h4>
        <p>
          For more details you can refer to{" "}
          <a
            href="https://tomchentw.github.io/react-google-maps/"
            target="_blank"
            rel="noopener noreferrer"
          >
            react-google-maps documentation
          </a>.
        </p>
      </div>
    );
  }
}

export default RowMap;
