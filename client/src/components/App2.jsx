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
import Theory from './Theory';

const App2 = () => {
  const [countryOne, setCountryOne] = useState({ name: 'World', code: 'global' });
  const [dbDataOne, setDbDataOne] = useState([]);
  const [quantityOne, setQuantityOne] = useState(5);
  const [theoryDataOne, setTheoryDataOne] = useState([]);

  const [countryTwo, setCountryTwo] = useState(null);
  const [dbDataTwo, setDbDataTwo] = useState([]);
  const [quantityTwo, setQuantityTwo] = useState(5);
  const [theoryDataTwo, setTheoryDataTwo] = useState([]);

  const [clicks, setClicks] = useState(0);
  // const [reset, setReset] = useState(false);

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
    setCountryOne({ name: 'World', code: 'global' });
    setCountryTwo(null);
    setClicks(0);
    // setReset(true);
  };

  return (
    <>
      <Container fluid className="main-container">
        {/* <Row className="main-title"><h3>Global Music</h3></Row> */}
        <Row className="title-row">
          <Col>
            <i className="fas fa-globe-americas fa-8x" />
          </Col>
          <Col xs={8}>
            <h3 className="main-title">Globe-ify</h3>
          </Col>
        </Row>
        {/* <Row className="main-title"><h4>Select a country (or two)</h4></Row> */}
        <Row className="map-row">
          <Map setCountryOne={setCountryOne} setCountryTwo={setCountryTwo} clicks={clicks} setClicks={setClicks}/>
        </Row>
        <Row className="select-reset">
        {/* <div className="select-reset"> */}
          <h4 className="select-title">Select a country (or two)</h4>
          <span><Button onClick={resetCountries} variant="light" type="button" size="lg" className="reset-button">Reset</Button></span>
        {/* </div> */}
          {/* <button onClick={resetCountries} type="button" className="reset-button">Reset</button> */}
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
            {/* <h4>Top Songs</h4> */}
            <QuantityDropdown setDataQuantity={setQuantityOne} />
            <Songs dbData={dbDataOne} />
          </Col>
          {countryTwo && (
            <Col>
              {/* <h4>Top Songs</h4> */}
              <QuantityDropdown setDataQuantity={setQuantityTwo} />
              <Songs dbData={dbDataTwo} />
            </Col>
          )}
        </Row>
        <Row className="theory-row">
          <Col>
            <Theory data={theoryDataOne} />
          </Col>
          {countryTwo && (
            <Col>
              <Theory data={theoryDataTwo} />
            </Col>
          )}
        </Row>
        <Row className="features-row">
          <Col>
            <h4>Audio Features</h4>
            {/* <Graph2 dbData={dbDataOne} quantity={quantityOne} setTheoryData={setTheoryDataOne} /> */}
            <Graph2
              dbDataOne={dbDataOne}
              quantityOne={quantityOne}
              setTheoryDataOne={setTheoryDataOne}
              // codeOne={countryOne.code}
              dbDataTwo={dbDataTwo}
              quantityTwo={quantityTwo}
              setTheoryDataTwo={setTheoryDataTwo}
              // codeTwo={countryTwo.code}
            />
          </Col>
          {/* {countryTwo && (
            <Col>
              <h4>Audio Features</h4>
              <Graph2 dbData={dbDataTwo} quantity={quantityTwo} setTheoryData={setTheoryDataTwo} />
            </Col>
          )} */}
        </Row>
        {/* <Row>
          <Col>
            <Theory data={theoryDataOne} />
          </Col>
          {countryTwo && (
            <Col>
              <Theory data={theoryDataTwo} />
            </Col>
          )}
        </Row> */}
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