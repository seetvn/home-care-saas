// import React, { useEffect, useRef } from 'react';
// import PropTypes from "prop-types";
// import { useHistory } from 'react-router-dom';

// const GoogleMap = ({ apiKey, zoom, center, pinLocations }) => {
//   const mapRef = useRef(null);
//   const history = useHistory();

//   useEffect(() => {
//     const googleScript = document.createElement('script');

//     googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
//     googleScript.async = true;

//     // Attach your callback function to the `window` object
//     window.initMap = function() {
//       // JS API is loaded and available
//     };


//     document.body.appendChild(googleScript);
    
//     googleScript.onload = () => {
//       const map = new window.google.maps.Map(mapRef.current, {
//         zoom,
//         center,
//       });

//       // Add pins to the map
//       pinLocations.forEach((pin, index) => {
//         const marker = new window.google.maps.Marker({
//           position: pin,
//           map,
//           icon: {
//             url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/parking_lot_maps.png', // Replace with your image URL
//             scaledSize: new window.google.maps.Size(30, 30), // Adjust size as needed
//           }
//         });

//         // Add click event listener to the marker
//         marker.addListener('click', () => {
//           // Navigate to another page when marker is clicked
//           history.push(`/c/profile`); // Example navigation to details page with index as parameter
//         });
//       });
//     };

//     return () => {
//       document.body.removeChild(googleScript);
//     };
//   }, [apiKey, zoom, center, pinLocations, history]);

//   return <div ref={mapRef} style={{ width: '100%', height: '600px' }} />;
// };

// GoogleMap.propTypes = {
//   apiKey: PropTypes.string.isRequired,
//   zoom: PropTypes.number.isRequired,
//   center: PropTypes.shape({
//     lat: PropTypes.number.isRequired,
//     lng: PropTypes.number.isRequired,
//   }).isRequired,
//   pinLocations: PropTypes.arrayOf(
//     PropTypes.shape({
//       lat: PropTypes.number.isRequired,
//       lng: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };

// export default GoogleMap;

import React from "react";
import GoogleMapReact from 'google-map-react';
import manImage from './muhammed.jpg';
import woman1Image from './john.png';
import woman2Image from './tyrell.jpg';

const CustomMarker = ({ src, lat, lng }) => (
  <div style={{ position: 'absolute', transform: 'translate(-50%, -50%)' }}>
    <img src={src} alt="Marker" style={{ width: '30px', height: '30px', borderRadius: '100%' }} />
  </div>
);

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 51.3813,
      lng: -2.3625
    },
    zoom: 14
  };

  const markers = [
    { lat: 51.3853, lng: -2.3535, key: 'marker1', src: manImage },
    { lat: 51.3835, lng: -2.3625, key: 'marker2', src: woman1Image },
    { lat: 51.3749, lng: -2.3629, key: 'marker3', src: woman2Image },
    // Add more markers as needed
  ];

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBC9lP5hl9rBZbW4jNn-8x_edNzjFfZ3og" }} // Replace with your Google Maps API key
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {markers.map(marker => (
          <CustomMarker
            key={marker.key}
            lat={marker.lat}
            lng={marker.lng}
            src={marker.src}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}
