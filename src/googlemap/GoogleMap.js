import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function GoogleMap() {
  const defaultProps = {
    center: {
      lat: 28.4814,
      lng: 77.1488,
    },
    zoom: 13,
  };

  return (
    // Important! Always set the container height explicitly
    <div className="Gmap">
      <div style={{ height: "480px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBlDosAmGJwMLJfIqFAIGkVN7w4TEdYAGg" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={28.4814} lng={77.1488} text="My Marker" />
        </GoogleMapReact>
      </div>
    </div>
  );
}
