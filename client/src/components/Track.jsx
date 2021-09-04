/* eslint-disable camelcase */
import React from 'react';

const Track = ({ song, setPlayingTrack, playTrackId }) => {
  const {
    rank,
    name,
    artist,
    streams,
    url,
    spotify_id,
  } = song;

  let player;
  if (playTrackId !== spotify_id) {
    player = null;
  } else {
    player = (
      <iframe src={url} width="75%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media" title={name} />
    );
  }

  return (
    <div className="track-info">
      <div>
        <div>{rank}. <b>{name}</b> - <em>{artist}</em></div>
        <div>{streams.toLocaleString()} Streams</div>
        <div>Listen: <i className="far fa-play-circle" onClick={() => setPlayingTrack(spotify_id)} onKeyDown={() => setPlayingTrack(spotify_id)} role="button" tabIndex="0" label="play" /></div>
      </div>
      {player}
    </div>
  );
};

export default Track;
