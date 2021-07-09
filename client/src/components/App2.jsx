import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
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

  const resetCountries = (e) => {
    e.preventDefault();
    setCountryOne({ name: 'Global', code: 'global' });
    setCountryTwo(null);
  };

  return (
    <>
      <Container fluid className="main-container">
        <Row><h3>Global Music</h3></Row>
        <Row><h4>Select a country</h4></Row>
        <Row>
          <Map setCountryOne={setCountryOne} setCountryTwo={setCountryTwo} />
        </Row>
        <Row>
          <Button onClick={resetCountries} type="button">Reset Countries</Button>
        </Row>
        <Row>
          <Col>
            <h3>
              Selected Country:
              {` ${countryOne.name}`}
            </h3>
          </Col>
          {countryTwo && (
            <Col>
              <h3>
                Selected Country Two:
                {` ${countryTwo.name}`}
              </h3>
            </Col>
          )}
        </Row>
        <Row>
          <Col>
            <h4>Top Songs</h4>
            <QuantityDropdown setDataQuantity={setQuantityOne} />
            <Songs dbData={dbDataOne} />
          </Col>
          {countryTwo && (
            <Col>
              <h4>Top Songs</h4>
              <QuantityDropdown setDataQuantity={setQuantityTwo} />
              <Songs dbData={dbDataTwo} />
            </Col>
          )}
        </Row>
        <Row>
          <Col>
            <h4>Audio Features</h4>
            <Graph2 dbData={dbDataOne} quantity={quantityOne} />
          </Col>
          {countryTwo && (
            <Col>
              <h4>Audio Features</h4>
              <Graph2 dbData={dbDataTwo} quantity={quantityTwo} />
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
};

export default App2;

// {countryTwo && (
//   <>
//     {/* <h3>
//       Selected Country Two:
//       {` ${countryTwo.name}`}
//     </h3> */}
//     {/* <h4>Top Songs</h4>
//     <QuantityDropdown setDataQuantity={setQuantityTwo} />
//     <Songs dbData={dbDataTwo} /> */}
//     {/* <h4>Audio Features</h4>
//     <Graph2 dbData={dbDataTwo} quantity={quantityTwo} /> */}
//   </>
// )}