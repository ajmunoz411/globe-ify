import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { countries } from '../../../data/countryCodeCoord';
import config from '../../../config';

const Map = (props) => {
  const {
    setCountryOne,
    setCountryTwo,
    clicks,
    setClicks,
  } = props;

  const containerStyle = {
    width: '850px',
    height: '550px',
  };

  const center = {
    lat: 39.73,
    lng: -104.99,
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `${config.GMAPS}`,
  });

  const onMapClick = (country) => {
    if (clicks === 0) {
      setCountryOne(country);
      setClicks(1);
    } else {
      setCountryTwo(country);
    }
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={1}
      className="main-map"
    >
      {countries.map((curCountry) => (
        <Marker
          position={{ lat: curCountry.pos[0], lng: curCountry.pos[1] }}
          label={curCountry.name}
          onClick={() => onMapClick(curCountry)}
          key={curCountry.code}
        />
      ))}
      <></>
    </GoogleMap>
  ) : <></>;
};

export default Map;
