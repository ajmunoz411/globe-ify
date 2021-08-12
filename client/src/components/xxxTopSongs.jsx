import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
// import Row from 'react-bootstrap/Row';
import axios from 'axios';
import Graph from './Graph';
import Track from './Track';

const TopSongs = (props) => {
  // let dataArr = [];
  // if (data) {
  //   dataArr = data;
  // }
  // const [data, setData] = useState([]);
  const [features, setFeatures] = useState([]);
  const { country, setData } = props;
  // const [country, setCountry] = useState({ name: 'Global', code: 'global' });
  const [quantity, setQuantity] = useState(5);
  const [playingTrack, setPlayingTrack] = useState(null);
  const [featData, setFeatData] = useState([]);
  const [theoryData, setTheoryData] = useState([]);

  useEffect(() => {
    axios.get(`/spotify/db/${country.code}/${quantity}`)
      .then((dbData) => {
        setData([...dbData.data]);
      })
      .catch((err) => {
        console.log('error getting tracks', err);
      });
  }, [country, quantity]);

  // useEffect(() => {
  //   // console.log('data', data);
  //   let idsList = '';
  //   if (data.length > 0) {
  //     data.map((track, i) => {
  //       if (i !== data.length - 1) {
  //         idsList += `${track.id},`;
  //       } else {
  //         idsList += track.id;
  //       }
  //     });
  //     axios.get(`/spotify/features/${idsList}`)
  //       .then((featData) => {
  //         console.log('featData', featData.data.audio_features);
  //         setFeatures([...featData.data.audio_features]);
  //       })
  //       .catch((err) => {
  //         console.log('err getting features', err);
  //       });
  //   }
  // }, [data]);

  // useEffect(() => {
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
  //   features.forEach((featObj) => {
  //     const featArr = Object.entries(featObj);
  //     featArr.forEach((feature) => {
  //       if (featuresTotals[feature[0]] !== undefined) {
  //         featuresTotals[feature[0]] += feature[1];
  //       }
  //     });
  //   });
  //   const featuresTotalsArr = Object.entries(featuresTotals);

  //   const averageFeats = {};
  //   const count = 5;
  //   featuresTotalsArr.forEach((feature) => {
  //     averageFeats[feature[0]] = feature[1] / count;
  //   });
  //   const graphFeats = [];
  //   const theoryFeats = {};

  //   console.log('averageFeats', averageFeats);
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

  //   const keys = {
  //     0: 'C',
  //     1: 'C#',
  //     2: 'D',
  //     3: 'D#',
  //     4: 'E',
  //     5: 'F',
  //     6: 'F#',
  //     7: 'G',
  //     8: 'G#',
  //     9: 'A',
  //     10: 'A#',
  //     11: 'B',
  //   };

  //   const modes = {
  //     0: 'Minor',
  //     1: 'Major',
  //   };

  //   theoryFeats['Key'] = keys[Math.round(averageFeats.key) - 1];
  //   theoryFeats['Mode'] = modes[Math.round(averageFeats.mode)];
  //   theoryFeats['Meter'] = averageFeats.time_signature;
  //   theoryFeats['BPM'] = Math.round(averageFeats.tempo);

  //   // console.log('graphFeats', graphFeats);
  //   setFeatData([...graphFeats]);
  //   const theoryArr = Object.entries(theoryFeats);
  //   setTheoryData([...theoryArr]);
  // }, [features]);

  // let graph;
  // if (featData.length > 0) {
  //   graph = <Graph featData={featData} />;
  // } else {
  //   graph = <></>;
  // }
  return (
    <>
      <h4>Top Songs</h4>
      <DropdownButton className="dropdown-quantity-button" title={quantity} variant="outline-dark" size="sm">
        <Dropdown.Item onClick={() => setQuantity('5')}>5</Dropdown.Item>
        <Dropdown.Item onClick={() => setQuantity('10')}>10</Dropdown.Item>
        <Dropdown.Item onClick={() => setQuantity('25')}>25</Dropdown.Item>
        <Dropdown.Item onClick={() => setQuantity('50')}>50</Dropdown.Item>
      </DropdownButton>
      <Container>
        {data.map((song, i) => (
          <Track
            song={song}
            setPlayingTrack={setPlayingTrack}
            playTrackId={playingTrack}
            key={i}
          />
        ))}
      </Container>
      {/* <Graph featData={featData} /> */}
      {/* {graph} */}
    </>
  );
};

export default TopSongs;