import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Map from './Map';

const App = () => {
  const [country, setCountry] = useState('');
  // useEffect(() => {
  //   console.log('country', country);
  // }, [country]);
  return (
    <div>
      <Container className="main-container">
        <Row className="main-header">
          <div>GLOBAL MUSIC</div>
        </Row>
        <Row className="map">
          <div>Select A Country</div>
          <Map setCountry={setCountry} />
        </Row>
        <Row>
          <div>
            Selected Country:
            {` ${country}`}
          </div>
        </Row>
        <div>Songs Placeholder</div>
      </Container>
    </div>
  );
};
export default App;
