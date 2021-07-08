/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation } from 'swiper';
// import 'swiper/swiper.min.css';
// import 'swiper/components/navigation/navigation.min.css';
import Map from './Map';
import Track from './Track';
import Graph from './Graph';

// SwiperCore.use([Navigation]);

const App = () => {
  const [country, setCountry] = useState({ name: 'Global', code: 'global' });
  const [data, setData] = useState([]);
  const [features, setFeatures] = useState([]);
  const [playingTrack, setPlayingTrack] = useState(null);
  const [featData, setFeatData] = useState([]);
  const [theoryData, setTheoryData] = useState([]);

  useEffect(() => {
    axios.get(`/spotify/db/${country.code}`)
      .then((dbData) => {
        setData([...dbData.data]);
      })
      .catch((err) => {
        console.log('error getting tracks', err);
      });
  }, [country]);

  useEffect(() => {
    // console.log('data', data);
    let idsList = '';
    if (data.length > 0) {
      data.map((track, i) => {
        if (i !== data.length - 1) {
          idsList += `${track.id},`;
        } else {
          idsList += track.id;
        }
      });
      axios.get(`/spotify/features/${idsList}`)
        .then((featData) => {
          console.log('featData', featData.data.audio_features);
          setFeatures([...featData.data.audio_features]);
        })
        .catch((err) => {
          console.log('err getting features', err);
        });
    }
  }, [data]);

  useEffect(() => {
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
    features.forEach((featObj) => {
      const featArr = Object.entries(featObj);
      featArr.forEach((feature) => {
        if (featuresTotals[feature[0]] !== undefined) {
          featuresTotals[feature[0]] += feature[1];
        }
      });
    });
    const featTots = Object.entries(featuresTotals);
    const averageFeats = {};
    const count = 5;
    featTots.forEach((feature) => {
      averageFeats[feature[0]] = feature[1] / count;
    });
    const graphFeats = [];
    const theoryFeats = {};
    console.log('averageFeats', averageFeats);
    graphFeats.push(averageFeats.acousticness * 10);
    graphFeats.push(averageFeats.danceability * 10);
    graphFeats.push(averageFeats.duration_ms / 1000 / 60);
    // graphFeats.push(averageFeats.duration_ms /= 60);
    graphFeats.push(averageFeats.energy * 10);
    graphFeats.push(averageFeats.instrumentalness * 1000);
    theoryFeats.key = Math.round(averageFeats.key);
    graphFeats.push(averageFeats.liveness * 10);
    graphFeats.push(averageFeats.loudness + 10);
    theoryFeats.mode = Math.round(averageFeats.mode);
    graphFeats.push(averageFeats.speechiness * 10);
    graphFeats.push(averageFeats.tempo / 20);
    graphFeats.push(averageFeats.valence * 10);
    // console.log('averageFeats', averageFeats);
    // const finalFeatData = Object.values(averageFeats);
    // setFeatData([...finalFeatData]);
    theoryFeats.time_signature = averageFeats.time_signature;
    theoryFeats.tempo = averageFeats.tempo;
    console.log('graphFeats', graphFeats);
    setFeatData([...graphFeats]);
    const theoryArr = Object.entries(theoryFeats);
    setTheoryData([...theoryArr]);
  }, [features]);

  return (
    <div>
      <Container className="main-container">
        <Row className="main-header">
          <h3>GLOBAL MUSIC</h3>
        </Row>
        <Row className="map">
          <h4>Select A Country</h4>
          <Map setCountry={setCountry} />
        </Row>
        <Row>
          <h3>
            Selected Country:
            {` ${country.name}`}
          </h3>
        </Row>
        <h4>Top Songs</h4>
        <Container>
          {/* <Swiper
            slidesPerView={3}
            spaceBetween={5}
            navigation
            className="songs-swiper"
          > */}
          {/* <div> */}
          {data.map((song, i) => (
            // <SwiperSlide key={i}>
            <Track
              song={song}
              setPlayingTrack={setPlayingTrack}
              playTrackId={playingTrack}
              key={i}
            />
            // </SwiperSlide>
          ))}
          {/* </Swiper> */}
          {/* </div> */}
        </Container>
        <h4>Audio Features</h4>
        <Container>
          <Graph featData={featData} />
        </Container>
        <h4>Music Theory</h4>
        {theoryData.map((theory, i) => (
          <div key={i}>
            {theory[0]}
            -
            {theory[1]}
          </div>
        ))}
      </Container>
    </div>
  );
};
export default App;

{/* <table className="tracks-table">
  <thead>
    <tr>
      <th>Rank</th>
      <th>Track</th>
      <th>Artist</th>
      <th>Streams</th>
    </tr>
  </thead>
  <tbody>
    {data.map((track, i) => (
      <tr key={i}>
        <td className="track-rank">{track.rank}</td>
        <td className="track-name">{track.track}</td>
        <td className="track-artist">{track.artist}</td>
        <td className="track-streams">{track.streams}</td>
      </tr>
    ))}
  </tbody>
</table> */}