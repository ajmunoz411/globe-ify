import React, { useState } from 'react';
import Track from './Track';

const Songs = ({ dbData }) => {
  let data = [];
  if (dbData) {
    data = dbData;
  }

  const [playingTrack, setPlayingTrack] = useState(null);

  return (
    <div className="songs-container">
      {data.map((song, i) => (
        <Track
          song={song}
          setPlayingTrack={setPlayingTrack}
          playTrackId={playingTrack}
          key={i}
        />
      ))}
    </div>
  );
};

export default Songs;
