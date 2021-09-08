import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Theory from './Theory';
import Graph from './Graph';
import graphProps from '../../../data/graphProps';

const Analysis = (props) => {
  const {
    dbDataOne,
    quantityOne,
    // setTheoryDataOne,
    dbDataTwo,
    quantityTwo,
    // setTheoryDataTwo,
    clicks,
  } = props;

  const [featDataOne, setFeatDataOne] = useState([]);
  const [featDataTwo, setFeatDataTwo] = useState([]);

  const [theoryDataOne, setTheoryDataOne] = useState([]);
  const [theoryDataTwo, setTheoryDataTwo] = useState([]);

  const getAverages = (tracks, quantity, featSetter, theorySetter) => {
    const featuresTotals = {
      acousticness: 0,
      danceability: 0,
      duration: 0,
      energy: 0,
      instrumentalness: 0,
      key: 0,
      liveness: 0,
      loudness: 0,
      mode: 0,
      speechiness: 0,
      tempo: 0,
      meter: 0,
      valence: 0,
    };

    tracks.forEach((trackObj) => {
      Object.entries(trackObj).forEach(([feature, value]) => {
        if (featuresTotals[feature] !== undefined) {
          featuresTotals[feature] += value;
        }
      });
    });

    const graphFeats = {};
    const theoryFeats = {};

    Object.entries(featuresTotals).forEach(([feature, value]) => {
      // convert to minutes / 6 * 100 (so 100% is 6 minutes)
      if (feature === 'duration') {
        const minutes = value / quantity / 1000 / 60;
        const min = Math.floor(minutes);
        const sec = Math.round((minutes - Math.floor(minutes)) * 60);
        theoryFeats[feature] = `${min} minutes, ${sec} seconds`;
        graphFeats[feature] = (minutes / 6) * 100;
      // convert db to percentage (p = (10 ^ X/10) * 100)
      } else if (feature === 'loudness') {
        const decibel = (value / quantity).toFixed(2);
        theoryFeats[feature] = `${decibel} db`;
        graphFeats[feature] = 10 ** ((value / quantity) / 10) * 100;
        // round to nearest whole
      } else if (feature === 'key') {
        theoryFeats[feature] = graphProps.keys[Math.round(value / quantity)];
      } else if (feature === 'meter') {
        theoryFeats[feature] = value / quantity;
        // convert to percentage using 300 bpm as 100%
      } else if (feature === 'mode') {
        theoryFeats[feature] = graphProps.modes[Math.round(value / quantity)];
      } else if (feature === 'tempo') {
        theoryFeats[feature] = Math.round(value / quantity);
        graphFeats[feature] = (value / quantity) / 3;
      } else if (feature === 'instrumentalness') {
        graphFeats[feature] = (value / quantity) * 10000;
      } else {
        graphFeats[feature] = (value / quantity) * 100;
      }
    });

    featSetter(([...Object.values(graphFeats)]));
    const theoryArr = Object.entries(theoryFeats);
    theorySetter([...theoryArr]);
  };

  useEffect(() => {
    if (dbDataOne.length > 0) {
      getAverages(dbDataOne, quantityOne, setFeatDataOne, setTheoryDataOne);
    }
  }, [dbDataOne]);

  useEffect(() => {
    if (dbDataTwo.length > 0) {
      getAverages(dbDataTwo, quantityTwo, setFeatDataTwo, setTheoryDataTwo);
    }
  }, [dbDataTwo]);

  let render = false;
  if ((clicks === 0 && featDataOne.length > 0) || (clicks > 0 && featDataTwo.length > 0)) {
    render = true;
  }

  return (render) ? (
    <>
      <Row className="theory-row">
        <Col>
          <Theory data={theoryDataOne} />
        </Col>
        {/* {countryTwo && (
          <Col>
            <Theory data={theoryDataTwo} />
          </Col>
        )} */}
        {theoryDataTwo.length && (
          <Col>
            <Theory data={theoryDataTwo} />
          </Col>
        )}
      </Row>
      <Row className="features-row">
        <Col>
          <h4>Audio Features</h4>
          <Graph
            // dbDataOne={dbDataOne}
            // quantityOne={quantityOne}
            // // setTheoryDataOne={setTheoryDataOne}
            // dbDataTwo={dbDataTwo}
            // quantityTwo={quantityTwo}
            // setTheoryDataTwo={setTheoryDataTwo}
            featDataOne={featDataOne}
            featDataTwo={featDataTwo}
          />
        </Col>
      </Row>
    </>
  ) : <></>;
};

export default Analysis;
