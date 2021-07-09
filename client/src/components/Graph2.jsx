import React, { useState, useEffect } from 'react';
import { PolarArea } from 'react-chartjs-2';
import Theory from './Theory';
import axios from 'axios';

const Graph2 = (props) => {
  const { dbData, quantity } = props;
  const [featData, setFeatData] = useState([]);
  const [theoryData, setTheoryData] = useState([]);
  useEffect(() => {
    let idsList = '';
    if (dbData.length > 0) {
      dbData.map((track, i) => {
        if (i !== dbData.length - 1) {
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
        averageFeats[feature[0]] = feature[1] / quantity;
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

      // console.log('graphFeats', graphFeats);
      // console.log('averageFeats', averageFeats);

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
      setTheoryData([...theoryArr]);
    };
  }, [dbData, quantity]);

  const graphData = {
    labels: ['Acousticness', 'Danceability', 'Duration(mins)', 'Energy', 'Instrumentalness', 'Liveness', 'Loudness', 'Speechiness', 'Tempo', 'Valence'],

    datasets: [
      {
        label: 'Average',
        data: featData,
        backgroundColor: [
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
        ],
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
        <Theory data={theoryData} />
      </>
    );
  }
  return null;
};

export default Graph2;
