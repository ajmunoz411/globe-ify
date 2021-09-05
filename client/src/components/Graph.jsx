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

  const [featData, setFeatData] = useState([]);
  const getAverages = (tracks, theorySetter) => {
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
        const bpm = value / quantityOne / 1000 / 60;
        theoryFeats[feature] = bpm;
        graphFeats[feature] = (bpm / 6) * 100;
      // convert db to percentage (p = (10 ^ X/10) * 100)
      } else if (feature === 'loudness') {
        theoryFeats[feature] = value / quantityOne;
        graphFeats[feature] = 10 ** ((value / quantityOne) / 10) * 100;
        // round to nearest whole
      } else if (feature === 'key') {
        theoryFeats[feature] = Math.round(value / quantityOne);
      } else if (feature === 'meter' || feature === 'mode') {
        theoryFeats[feature] = value / quantityOne;
        // convert to percentage using 300 bpm as 100%
      } else if (feature === 'tempo') {
        theoryFeats[feature] = value / quantityOne;
        graphFeats[feature] = (value / quantityOne) / 3;
      } else if (feature === 'instrumentalness') {
        graphFeats[feature] = (value / quantityOne) * 10000;
      } else {
        graphFeats[feature] = (value / quantityOne) * 100;
      }
    });

    // setFeatData([...Object.values(graphFeats)]);
    setFeatData((oldArray) => [...oldArray, ...Object.values(graphFeats)]);
    const theoryArr = Object.entries(theoryFeats);
    theorySetter([...theoryArr]);
  };

  useEffect(() => {
    if (dbDataOne.length > 0) {
      getAverages(dbDataOne, setTheoryDataOne);
    }
  }, [dbDataOne, quantityOne]);

  useEffect(() => {
    if (dbDataTwo.length > 0) {
      getAverages(dbDataTwo, setTheoryDataTwo);
    }
  }, [dbDataTwo, quantityTwo]);

  let graphLabels;
  let graphColors;
  if (dbDataTwo.length === 0) {
    graphLabels = graphProps.singleLabels;
    graphColors = graphProps.singleColors;
  } else {
    graphLabels = graphProps.doubleLabels;
    graphColors = graphProps.doubleColors;
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


// const getAverages = (featsArr) => {
//   const featuresTotals = {
//     acousticness: 0,
//     danceability: 0,
//     duration_ms: 0,
//     energy: 0,
//     instrumentalness: 0,
//     key: 0,
//     liveness: 0,
//     loudness: 0,
//     mode: 0,
//     speechiness: 0,
//     tempo: 0,
//     time_signature: 0,
//     valence: 0,
//   };

//   featsArr.forEach((featObj) => {
//     const featArr = Object.entries(featObj);
//     featArr.forEach((feature) => {
//       if (featuresTotals[feature[0]] !== undefined) {
//         featuresTotals[feature[0]] += feature[1];
//       }
//     });
//   });

//   const featuresTotalsArr = Object.entries(featuresTotals);

//   const averageFeats = {};

//   featuresTotalsArr.forEach((feature) => {
//     averageFeats[feature[0]] = feature[1] / quantityTwo;
//   });
//   const graphFeats = [];
//   const theoryFeats = {};

//   graphFeats.push(averageFeats.acousticness * 10);
//   graphFeats.push(averageFeats.danceability * 10);
//   graphFeats.push(averageFeats.duration_ms / 1000 / 60);
//   graphFeats.push(averageFeats.energy * 10);
//   graphFeats.push(averageFeats.instrumentalness * 1000);
//   graphFeats.push(averageFeats.liveness * 10);
//   graphFeats.push(averageFeats.loudness + 10);
//   graphFeats.push(averageFeats.speechiness * 10);
//   graphFeats.push(averageFeats.tempo / 20);
//   graphFeats.push(averageFeats.valence * 10);

//   const { keys, modes } = graphProps;

//   // const modes = {
//   //   0: 'Minor',
//   //   1: 'Major',
//   // };

//   theoryFeats['Key'] = keys[Math.round(averageFeats.key) - 1];
//   theoryFeats['Mode'] = modes[Math.round(averageFeats.mode)];
//   theoryFeats['Meter'] = averageFeats.time_signature;
//   theoryFeats['BPM'] = Math.round(averageFeats.tempo);

//   setFeatData((oldArray) => [...oldArray, ...graphFeats]);
//   const theoryArr = Object.entries(theoryFeats);
//   setTheoryDataTwo([...theoryArr]);
// };

// useEffect(() => {
//   let idsList = '';
//   if (dbDataTwo.length > 0) {
//     dbDataTwo.map((track, i) => {
//       if (i !== dbDataTwo.length - 1) {
//         idsList += `${track.id},`;
//       } else {
//         idsList += track.id;
//       }
//     });
//     axios.get(`/spotify/features/${idsList}`)
//       .then((resFeatData) => {
//         getAverages(resFeatData.data.audio_features, setTheoryDataTwo);
//       })
//       .catch((err) => {
//         console.log('err getting features', err);
//       });
//   }
// }, [dbDataTwo, quantityTwo]);

// useEffect(() => {
//   let idsList = '';
//   if (dbDataOne.length > 0) {
//     dbDataOne.map((track, i) => {
//       if (i !== dbDataOne.length - 1) {
//         idsList += `${track.id},`;
//       } else {
//         idsList += track.id;
//       }
//     });
//     axios.get(`/spotify/features/${idsList}`)
//       .then((resFeatData) => {
//         getAverages(resFeatData.data.audio_features, setTheoryDataOne);
//       })
//       .catch((err) => {
//         console.log('err getting features', err);
//       });
//   }
// }, [dbDataOne, quantityOne]);