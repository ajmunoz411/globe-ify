/* eslint-disable camelcase */
import React from 'react';

const Track = ({ song, setPlayingTrack, playTrackId }) => {
  const {
    rank,
    streams,
    url,
    spotify_id,
  } = song;

  const removeQuotes = (string) => string.replace(/^"(.*)"$/, '$1');

  const name = removeQuotes(song.name);
  const artist = removeQuotes(song.artist);

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
      <div>{rank}. <b>{name}</b> - <em>{artist}</em></div>
      <div>{streams.toLocaleString()} Streams</div>
      <div>Listen: <i className="far fa-play-circle" onClick={() => setPlayingTrack(spotify_id)} onKeyDown={() => setPlayingTrack(spotify_id)} role="button" tabIndex="0" label="play" /></div>
      {player}
    </div>
  );
};

export default Track;
