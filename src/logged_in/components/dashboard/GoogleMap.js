import React, { useEffect, useRef } from 'react';
import PropTypes from "prop-types";

const GoogleMap = ({ apiKey, zoom, center, pinLocations }) => {
  const mapRef = useRef(null);

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
      pinLocations.forEach((pin) => {
        new window.google.maps.Marker({
          position: pin,
          map,
        });
      });
      
      // new window.google.maps.Marker({
      //   position: center,
      //   map,
      // });
    };
    //document.body.appendChild(googleScript);

    return () => {
      document.body.removeChild(googleScript);
    };
  }, [apiKey, zoom, center, pinLocations]);

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
