import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import Map from './Map';
// import Track from './Track';
// import Graph from './Graph';
import Graph2 from './Graph2';
import QuantityDropdown from './QuantityDropdown';
import Songs from './Songs';

const App2 = () => {
  const [countryOne, setCountryOne] = useState({ name: 'Global', code: 'global' });
  const [dbDataOne, setDbDataOne] = useState([]);
  const [quantityOne, setQuantityOne] = useState(5);

  const [countryTwo, setCountryTwo] = useState(null);
  const [dbDataTwo, setDbDataTwo] = useState([]);
  const [quantityTwo, setQuantityTwo] = useState(5);

  // GET DB DATA FOR FIRST COUNTRY
  useEffect(() => {
    axios.get(`/spotify/db/${countryOne.code}/${quantityOne}`)
      .then((dbData) => {
        setDbDataOne([...dbData.data]);
      })
      .catch((err) => {
        console.log('error getting ct1 tracks', err);
      });
  }, [countryOne, quantityOne]);

  // GET DB DATA FOR SECOND COUNTRY
  useEffect(() => {
    if (countryTwo) {
      axios.get(`/spotify/db/${countryTwo.code}/${quantityTwo}`)
        .then((dbData) => {
          setDbDataTwo([...dbData.data]);
        })
        .catch((err) => {
          console.log('error getting ct2 tracks', err);
        });
    }
  }, [countryTwo, quantityTwo]);

  return (
    <>
      <h3>Global Music</h3>
      <h4>Select a country</h4>
      <Map setCountryOne={setCountryOne} setCountryTwo={setCountryTwo} />
      <h3>
        Selected Country:
        {` ${countryOne.name}`}
      </h3>
      <h4>Top Songs</h4>
      <QuantityDropdown setDataQuantity={setQuantityOne} />
      <Songs dbData={dbDataOne} />
      <h4>Audio Features</h4>
      <Graph2 dbData={dbDataOne} quantity={quantityOne} />
      {countryTwo && (
        <>
          <h3>
            Selected Country Two:
            {` ${countryTwo.name}`}
          </h3>
          <h4>Top Songs</h4>
          <QuantityDropdown setDataQuantity={setQuantityTwo} />
          <Songs dbData={dbDataTwo} />
          <h4>Audio Features</h4>
          <Graph2 dbData={dbDataTwo} quantity={quantityTwo} />
        </>
      )}
    </>
  );
};

export default App2;
