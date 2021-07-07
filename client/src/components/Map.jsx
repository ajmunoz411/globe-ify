import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
// import { Marker } from '@react-google-maps/api';
import countries from './Countries';
import config from '../../../config';

const Map = (props) => {
  const { setCountry } = props;
  const containerStyle = {
    width: '500px',
    height: '500px',
  };

  const [center, setCenter] = useState({
    lat: 39.73,
    lng: -104.99,
  });

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `${config.GMAPS}`,
  });

  const onMapClick = (country) => {
    setCountry(country.name);
    setCenter({
      lat: country.pos[0],
      lng: country.pos[1],
    });
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={1}
    >
      {countries.map((curCountry, i) => (
        <Marker
          position={{ lat: curCountry.pos[0], lng: curCountry.pos[1] }}
          label={curCountry.name}
          onClick={() => onMapClick(curCountry)}
          key={i}
        />
      ))}
      <></>
    </GoogleMap>
  ) : <></>;
};

export default Map;
