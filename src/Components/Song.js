import { Link } from "react-router-dom";
import "./Song.css";

// SONG DISPLAYED IN songs.map in SONGSALL
const Song = ({ song }) => {
  return (
    <tr>
      <td>
        {song.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <a href={song.video_url} target="_blank" rel="noreferrer">
          <h4>
            {song.title} - {song.artist}
          </h4>
        </a>
      </td>
      <td>
        <Link to={`/songs/${song.id}`}>✏️</Link>
      </td>
    </tr>
  );
};

export default Song;
