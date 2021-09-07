import React, { useState, useEffect } from 'react';
import { PolarArea } from 'react-chartjs-2';
import graphProps from '../../../data/graphProps';

const Graph = (props) => {
  const {
    dbDataOne,
    quantityOne,
    setTheoryDataOne,
    dbDataTwo,
    quantityTwo,
    setTheoryDataTwo,
  } = props;

  const [featDataOne, setFeatDataOne] = useState([]);
  const [featDataTwo, setFeatDataTwo] = useState([]);

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
        const bpm = value / quantity / 1000 / 60;
        theoryFeats[feature] = bpm;
        graphFeats[feature] = (bpm / 6) * 100;
      // convert db to percentage (p = (10 ^ X/10) * 100)
      } else if (feature === 'loudness') {
        theoryFeats[feature] = value / quantity;
        graphFeats[feature] = 10 ** ((value / quantity) / 10) * 100;
        // round to nearest whole
      } else if (feature === 'key') {
        theoryFeats[feature] = Math.round(value / quantity);
      } else if (feature === 'meter' || feature === 'mode') {
        theoryFeats[feature] = value / quantity;
        // convert to percentage using 300 bpm as 100%
      } else if (feature === 'tempo') {
        theoryFeats[feature] = value / quantity;
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
  }, [dbDataOne, quantityOne]);

  useEffect(() => {
    if (dbDataTwo.length > 0) {
      getAverages(dbDataTwo, quantityTwo, setFeatDataTwo, setTheoryDataTwo);
    }
  }, [dbDataTwo, quantityTwo]);

  let graphLabels;
  let graphColors;
  let featData;
  if (dbDataTwo.length === 0) {
    graphLabels = graphProps.singleLabels;
    graphColors = graphProps.singleColors;
    featData = featDataOne;
  } else {
    graphLabels = graphProps.doubleLabels;
    graphColors = graphProps.doubleColors;
    featData = [...featDataOne, ...featDataTwo];
  }

  const graphData = {
    labels: graphLabels,
    datasets: [
      {
        label: 'Average',
        data: featData,
        backgroundColor: graphColors,
        borderColor: [
          'rgba(0, 0, 0, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (featData.length > 0) ? (
    <>
      <PolarArea data={graphData} />
    </>
  ) : null;
};

export default Graph;
