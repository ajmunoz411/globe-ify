import React from 'react';

const Track = ({ song, setPlayingTrack, playTrackId }) => {
  const {
    rank,
    track,
    artist,
    streams,
    url,
    id,
  } = song;

  let player;
  if (playTrackId !== id) {
    player = null;
  } else {
    player = (
      <iframe src={url} width="75%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media" title={track.track} />
    );
  }

  return (
    <div className="track-info">
      <div>
        <div>{rank}. <b>{track}</b> - <em>{artist}</em></div>
        <div>{streams.toLocaleString()} Streams</div>
        <div>Listen: <i className="far fa-play-circle" onClick={() => setPlayingTrack(id)} onKeyDown={() => setPlayingTrack(id)} role="button" tabIndex="0" label="play" /></div>
      </div>
      {player}
    </div>
  );
};

export default Track;
