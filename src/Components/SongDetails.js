import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Comments from "./Comments";
const API = process.env.REACT_APP_API_URL;

const SongDetails = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const [song, setSong] = useState({});

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((res) => {
        setSong(res.data);
      })
      .catch((err) => {
        console.warn("catch", err);
      });
  }, [id]);

  const deleteSong = () => {
    axios
      .delete(`${API}/songs/${id}`)
      .then(() => {
        navigate("/songs");
      })
      .catch((err) => {
        console.warn("catch", err);
      });
  };

  const handleDelete = () => {
    deleteSong();
  };

  return (
    <article>
      <h3>
        {song.is_favorite ? <span>⭐️</span> : null} {song.title}
      </h3>
      <h4>{song.artist}</h4>
      <h4>
        <span>
          <a href={song.video_url} target="_blank" rel="noreferrer">
            Watch Video!
          </a>
        </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </h4>
      <h4>{song.genre}</h4>

      <div className="showNavigation">
        <Link to={`/songs`}>
          <button>Back</button>
        </Link>
        <Link to={`/songs/${id}/edit`}>
          <button>Edit</button>
        </Link>
        <button onClick={handleDelete}>Delete Song</button>
      </div>
      <Comments />
    </article>
  );
};

export default SongDetails;
