import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Map from './Map';
import QuantityDropdown from './QuantityDropdown';
import Songs from './Songs';
import Analysis from './Analysis';

const App = () => {
  const getCountries = async (country, quantity) => {
    const tracksList = await axios.get(`/spotify/db/${country.code}/${quantity}`);
    return tracksList.data;
  };
  const [countryOne, setCountryOne] = useState({ name: 'World', code: 'global' });
  const [dbDataOne, setDbDataOne] = useState([]);
  const [quantityOne, setQuantityOne] = useState(5);

  const [countryTwo, setCountryTwo] = useState(null);
  const [dbDataTwo, setDbDataTwo] = useState([]);
  const [quantityTwo, setQuantityTwo] = useState(5);

  const [clicks, setClicks] = useState(false);

  useEffect(async () => {
    const data = await getCountries(countryOne, quantityOne);
    setDbDataOne(data);
  }, [countryOne, quantityOne]);

  useEffect(async () => {
    if (countryTwo) {
      const data = await getCountries(countryTwo, quantityTwo);
      setDbDataTwo(data);
    }
  }, [countryTwo, quantityTwo]);

  const resetCountries = () => {
    setCountryOne({ name: 'World', code: 'global' });
    setCountryTwo(null);
    setDbDataTwo([]);
    setClicks(false);
  };

  return (
    <>
      <Container fluid className="main-container">
        <Row className="title-row">
          <Col>
            <i className="fas fa-globe-americas fa-8x" />
          </Col>
          <Col xs={8}>
            <h3 className="main-title">Globe-ify</h3>
          </Col>
        </Row>
        <Row className="map-row">
          <Map
            setCountryOne={setCountryOne}
            setCountryTwo={setCountryTwo}
            clicks={clicks}
            setClicks={setClicks}
          />
        </Row>
        <Row className="select-reset">
          <h4 className="select-title">Select a country (or two)</h4>
          <span><Button onClick={resetCountries} variant="light" type="button" size="lg" className="reset-button">Reset</Button></span>
        </Row>
        <Row className="top-songs">
          <Col>
            <h3>
              {` ${countryOne.name}'s Top ${quantityOne} Songs`}
            </h3>
          </Col>
          {countryTwo && (
            <Col>
              <h3>
                {` ${countryTwo.name}'s Top ${quantityTwo} Songs`}
              </h3>
            </Col>
          )}
        </Row>
        <Row className="top-songs">
          <Col>
            <QuantityDropdown setDataQuantity={setQuantityOne} />
            <Songs dbData={dbDataOne} />
          </Col>
          {countryTwo && (
            <Col>
              <QuantityDropdown setDataQuantity={setQuantityTwo} />
              <Songs dbData={dbDataTwo} />
            </Col>
          )}
        </Row>
        <Analysis
          dbDataOne={dbDataOne}
          quantityOne={quantityOne}
          dbDataTwo={dbDataTwo}
          quantityTwo={quantityTwo}
        />
      </Container>
    </>
  );
};

export default App;
