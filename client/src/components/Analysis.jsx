import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Theory from './Theory';
import Graph from './Graph';
import { dataHelp, theoryHelp } from '../../../data/graphDataHelpers';

const Analysis = (props) => {
  const {
    dbDataOne,
    quantityOne,
    dbDataTwo,
    quantityTwo,
  } = props;

  const [featDataOne, setFeatDataOne] = useState([]);
  const [featDataTwo, setFeatDataTwo] = useState([]);

  const [theoryDataOne, setTheoryDataOne] = useState([]);
  const [theoryDataTwo, setTheoryDataTwo] = useState([]);

  const formatData = (totalsObj, quantity) => {
    const graphFeats = {};
    const theoryFeats = {};

    Object.entries(totalsObj).forEach(([feature, total]) => {
      if (feature === 'duration') {
        const avgMs = dataHelp.average(total, quantity);
        const minutes = dataHelp.msToMins(avgMs);
        theoryFeats.duration = theoryHelp.duration(minutes);
        graphFeats.duration = dataHelp.minsToPercentage(minutes);
      } else if (feature === 'loudness') {
        const avgDb = dataHelp.average(total, quantity);
        theoryFeats.loudness = theoryHelp.loudness(avgDb);
        graphFeats.loudness = dataHelp.dbToPercentage(avgDb);
      } else if (feature === 'key') {
        const avgKey = dataHelp.roundedAverage(total, quantity);
        theoryFeats.key = dataHelp.keyToString(avgKey);
      } else if (feature === 'meter') {
        theoryFeats.meter = dataHelp.average(total, quantity);
      } else if (feature === 'mode') {
        const avgMode = dataHelp.roundedAverage(total, quantity);
        theoryFeats.mode = dataHelp.modeToString(avgMode);
      } else if (feature === 'tempo') {
        theoryFeats.tempo = dataHelp.roundedAverage(total, quantity);
        graphFeats[feature] = dataHelp.average(total, quantity) / 3;
      } else if (feature === 'instrumentalness') {
        const avgInst = dataHelp.average(total, quantity);
        graphFeats.instrumentalness = avgInst * 10000;
      } else {
        const avgFeat = dataHelp.average(total, quantity);
        graphFeats[feature] = avgFeat * 100;
      }
    });

    return {
      graph: [...Object.values(graphFeats)],
      theory: [...Object.entries(theoryFeats)],
    };
  };

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

    const { graph, theory } = formatData(featuresTotals, quantity);
    featSetter(graph);
    theorySetter(theory);
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

  return (
    <>
      <Row className="theory-row">
        <Col>
          <Theory data={theoryDataOne} />
        </Col>
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
            featDataOne={featDataOne}
            featDataTwo={featDataTwo}
          />
        </Col>
      </Row>
    </>
  );
};

export default Analysis;
