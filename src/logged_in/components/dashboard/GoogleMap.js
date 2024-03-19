import React, { useEffect, useRef } from 'react';
import PropTypes from "prop-types";
import { useHistory } from 'react-router-dom';

const GoogleMap = ({ apiKey, zoom, center, pinLocations }) => {
  const mapRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const googleScript = document.createElement('script');
    googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    googleScript.async = true;

    document.body.appendChild(googleScript);
    
    googleScript.onload = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        zoom,
        center,
      });

      // Add pins to the map
      pinLocations.forEach((pin, index) => {
        const marker = new window.google.maps.Marker({
          position: pin,
          map,
        });

        // Add click event listener to the marker
        marker.addListener('click', () => {
          // Navigate to another page when marker is clicked
          history.push(`/c/profile`); // Example navigation to details page with index as parameter
        });
      });
    };

    return () => {
      document.body.removeChild(googleScript);
    };
  }, [apiKey, zoom, center, pinLocations, history]);

  return <div ref={mapRef} style={{ width: '100%', height: '600px' }} />;
};

GoogleMap.propTypes = {
  apiKey: PropTypes.string.isRequired,
  zoom: PropTypes.number.isRequired,
  center: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
  pinLocations: PropTypes.arrayOf(
    PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GoogleMap;
