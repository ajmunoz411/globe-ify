import React, { useState, useEffect } from 'react';
import { PolarArea } from 'react-chartjs-2';
import axios from 'axios';

const Graph = (props) => {
  const {
    dbDataOne,
    quantityOne,
    setTheoryDataOne,
    dbDataTwo,
    quantityTwo,
    setTheoryDataTwo,
  } = props;

  const [featData, setFeatData] = useState([]);
  const getAverages = (featsArr) => {
    // console.log('featsArr', featsArr);
    const featuresTotals = {
      acousticness: 0,
      danceability: 0,
      duration_ms: 0,
      energy: 0,
      instrumentalness: 0,
      key: 0,
      liveness: 0,
      loudness: 0,
      mode: 0,
      speechiness: 0,
      tempo: 0,
      time_signature: 0,
      valence: 0,
    };

    featsArr.forEach((featObj) => {
      const featArr = Object.entries(featObj);
      featArr.forEach((feature) => {
        if (featuresTotals[feature[0]] !== undefined) {
          featuresTotals[feature[0]] += feature[1];
        }
      });
    });

    const featuresTotalsArr = Object.entries(featuresTotals);

    const averageFeats = {};

    featuresTotalsArr.forEach((feature) => {
      averageFeats[feature[0]] = feature[1] / quantityOne;
    });
    const graphFeats = [];
    const theoryFeats = {};

    graphFeats.push(averageFeats.acousticness * 10);
    graphFeats.push(averageFeats.danceability * 10);
    graphFeats.push(averageFeats.duration_ms / 1000 / 60);
    graphFeats.push(averageFeats.energy * 10);
    graphFeats.push(averageFeats.instrumentalness * 1000);
    graphFeats.push(averageFeats.liveness * 10);
    graphFeats.push(averageFeats.loudness + 10);
    graphFeats.push(averageFeats.speechiness * 10);
    graphFeats.push(averageFeats.tempo / 20);
    graphFeats.push(averageFeats.valence * 10);

    const keys = {
      0: 'C',
      1: 'C#',
      2: 'D',
      3: 'D#',
      4: 'E',
      5: 'F',
      6: 'F#',
      7: 'G',
      8: 'G#',
      9: 'A',
      10: 'A#',
      11: 'B',
    };

    const modes = {
      0: 'Minor',
      1: 'Major',
    };

    theoryFeats['Key'] = keys[Math.round(averageFeats.key) - 1];
    theoryFeats['Mode'] = modes[Math.round(averageFeats.mode)];
    theoryFeats['Meter'] = averageFeats.time_signature;
    theoryFeats['BPM'] = Math.round(averageFeats.tempo);

    setFeatData([...graphFeats]);
    const theoryArr = Object.entries(theoryFeats);
    setTheoryDataOne([...theoryArr]);
  };

  useEffect(() => {
    let idsList = '';
    if (dbDataOne.length > 0) {
      dbDataOne.map((track, i) => {
        if (i !== dbDataOne.length - 1) {
          idsList += `${track.id},`;
        } else {
          idsList += track.id;
        }
      });
      axios.get(`/spotify/features/${idsList}`)
        .then((resFeatData) => {
          getAverages(resFeatData.data.audio_features);
        })
        .catch((err) => {
          console.log('err getting features', err);
        });
    }
  }, [dbDataOne, quantityOne]);

  useEffect(() => {
    let idsList = '';
    if (dbDataTwo.length > 0) {
      dbDataTwo.map((track, i) => {
        if (i !== dbDataTwo.length - 1) {
          idsList += `${track.id},`;
        } else {
          idsList += track.id;
        }
      });
      axios.get(`/spotify/features/${idsList}`)
        .then((resFeatData) => {
          getAverages(resFeatData.data.audio_features);
        })
        .catch((err) => {
          console.log('err getting features', err);
        });
    }

    const getAverages = (featsArr) => {
      const featuresTotals = {
        acousticness: 0,
        danceability: 0,
        duration_ms: 0,
        energy: 0,
        instrumentalness: 0,
        key: 0,
        liveness: 0,
        loudness: 0,
        mode: 0,
        speechiness: 0,
        tempo: 0,
        time_signature: 0,
        valence: 0,
      };

      featsArr.forEach((featObj) => {
        const featArr = Object.entries(featObj);
        featArr.forEach((feature) => {
          if (featuresTotals[feature[0]] !== undefined) {
            featuresTotals[feature[0]] += feature[1];
          }
        });
      });

      const featuresTotalsArr = Object.entries(featuresTotals);

      const averageFeats = {};

      featuresTotalsArr.forEach((feature) => {
        averageFeats[feature[0]] = feature[1] / quantityTwo;
      });
      const graphFeats = [];
      const theoryFeats = {};

      graphFeats.push(averageFeats.acousticness * 10);
      graphFeats.push(averageFeats.danceability * 10);
      graphFeats.push(averageFeats.duration_ms / 1000 / 60);
      graphFeats.push(averageFeats.energy * 10);
      graphFeats.push(averageFeats.instrumentalness * 1000);
      graphFeats.push(averageFeats.liveness * 10);
      graphFeats.push(averageFeats.loudness + 10);
      graphFeats.push(averageFeats.speechiness * 10);
      graphFeats.push(averageFeats.tempo / 20);
      graphFeats.push(averageFeats.valence * 10);

      const keys = {
        0: 'C',
        1: 'C#',
        2: 'D',
        3: 'D#',
        4: 'E',
        5: 'F',
        6: 'F#',
        7: 'G',
        8: 'G#',
        9: 'A',
        10: 'A#',
        11: 'B',
      };

      const modes = {
        0: 'Minor',
        1: 'Major',
      };

      theoryFeats['Key'] = keys[Math.round(averageFeats.key) - 1];
      theoryFeats['Mode'] = modes[Math.round(averageFeats.mode)];
      theoryFeats['Meter'] = averageFeats.time_signature;
      theoryFeats['BPM'] = Math.round(averageFeats.tempo);

      setFeatData((oldArray) => [...oldArray, ...graphFeats]);
      const theoryArr = Object.entries(theoryFeats);
      setTheoryDataTwo([...theoryArr]);
    };
  }, [dbDataTwo, quantityTwo]);

  let graphLabels;
  let graphColors;
  if (dbDataTwo.length === 0) {
    graphLabels = ['Acousticness', 'Danceability', 'Duration(mins)', 'Energy', 'Instrumentalness', 'Liveness', 'Loudness', 'Speechiness', 'Tempo', 'Valence'];
    graphColors = [
      'rgba(171, 222, 230, 1)',
      'rgba(203, 170, 203, 1)',
      'rgba(255, 255, 181, 1)',
      'rgba(255, 204, 182, 1)',
      'rgba(243, 176, 195, 1)',
      'rgba(198, 219, 218, 1)',
      'rgba(151, 193, 169, 1)',
      'rgba(236, 213, 227, 1)',
      'rgba(85, 203, 205, 1)',
      'rgba(246, 234, 194, 1)',
    ];
  } else {
    graphLabels = ['Acousticness 1', 'Danceability 1', 'Duration(mins) 1', 'Energy 1', 'Instrumentalness 1', 'Liveness 1', 'Loudness 1', 'Speechiness 1', 'Tempo 1', 'Valence 1', 'Acousticness 2', 'Danceability 2', 'Duration(mins) 2', 'Energy 2', 'Instrumentalness 2', 'Liveness 2', 'Loudness 2', 'Speechiness 2', 'Tempo 2', 'Valence 2'];
    graphColors = [
      'rgba(171, 222, 230, 1)',
      'rgba(203, 170, 203, 1)',
      'rgba(255, 255, 181, 1)',
      'rgba(255, 204, 182, 1)',
      'rgba(243, 176, 195, 1)',
      'rgba(198, 219, 218, 1)',
      'rgba(151, 193, 169, 1)',
      'rgba(236, 213, 227, 1)',
      'rgba(85, 203, 205, 1)',
      'rgba(246, 234, 194, 1)',
      'rgba(165, 222, 235, 0.3)',
      'rgba(195, 170, 210, 0.3)',
      'rgba(250, 255, 187, 0.3)',
      'rgba(250, 204, 187, 0.3)',
      'rgba(235, 176, 200, 0.3)',
      'rgba(192, 219, 225, 0.3)',
      'rgba(145, 193, 175, 0.3)',
      'rgba(230, 213, 235, 0.3)',
      'rgba(80, 203, 210, 0.3)',
      'rgba(241, 234, 200, 0.3)',
    ];
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
  if (featData.length > 0) {
    return (
      <>
        <PolarArea data={graphData} />
      </>
    );
  }
  return null;
};

export default Graph;
