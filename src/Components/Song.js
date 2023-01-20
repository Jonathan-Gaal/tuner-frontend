import { Link } from "react-router-dom";

// SONG DISPLAYED IN songs.map in SONGSALL
const Song = ({ song }) => {
  return (
    <div className="Song">
      <a href={song.video_url} target="_blank" rel="noreferrer">
        {song.title}
      </a>
    </div>
  );
};

export default Song;
