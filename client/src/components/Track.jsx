import React, { useState, useEffect } from 'react';

const Track = (props) => {
  const { song, setPlayingTrack, playTrackId } = props;
  const {
    rank,
    track,
    artist,
    streams,
    url,
    id,
  } = song;

  // handlePlay = () => {

  // }
  // const [clicked, setClicked] = useState(false);

  let player;
  if (playTrackId !== id) {
    player = null;
  } else {
    player = (
      <iframe src={url} width="75%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media" title={track.track} />
    );
  }

  // console.log('url', url);
  return (
    <div className="track-info">
      <div>
        {rank}
        -
        {track}
        -
        {artist}
        -
        {streams}
        <i className="far fa-play-circle" onClick={() => setPlayingTrack(id)} onKeyDown={() => setPlayingTrack(id)} role="button" tabIndex="0" label="play" />
      </div>
      {player}
    </div>
  );
};

export default Track;
