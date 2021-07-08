/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import Map from './Map';

const App = () => {
  const [country, setCountry] = useState('Global');
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`/spotify/db/${country}`)
      .then((dbData) => {
        setData([...dbData.data]);
      })
      .catch((err) => {
        console.log('error getting tracks', err);
      });
  }, [country]);

  // useEffect(() => {
  //   data.
  // }, [data]);

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
        <Container>
          <div>
            {data.map((song, i) => {
              const {
                rank,
                track,
                artist,
                streams,
                url,
              } = song;
              const index = url.indexOf('track/');
              const firstHalf = url.slice(0, index);
              const secondHalf = url.slice(index);
              const newUrl = `${firstHalf}embed/${secondHalf}`;
              return (
                <div className="track-info" key={i}>
                  <div>
                    {rank}
                    -
                    {track}
                    -
                    {artist}
                    -
                    {streams}
                  </div>
                  <iframe src={newUrl} width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media" title={track.track} />
                </div>
              );
            })}
          </div>
        </Container>
      </Container>
    </div>
  );
};
export default App;
