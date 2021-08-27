import React, { useState } from 'react';
import Track from './Track';

const Songs = ({ dbData } = []) => {
  const [playingTrack, setPlayingTrack] = useState(null);

  return (
    <div className="songs-container">
      {dbData.map((song) => (
        <Track
          song={song}
          setPlayingTrack={setPlayingTrack}
          playTrackId={playingTrack}
          key={song.id}
        />
      ))}
    </div>
  );
};

export default Songs;
